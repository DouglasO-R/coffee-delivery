import { createContext, ReactNode, useEffect, useState } from "react";
import { CartItem } from "../type/CartItem";

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    cartItemsTotal: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    changeCartItemQuantity: (
        cartItemId: number,
        type: "increase" | "decrease"
    ) => void;
    removeCartItem: (cartItemId: number) => void;
    cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

const COFFEE_CART_STORAGE = "coffeeDelivery:cartItems";


export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_CART_STORAGE);
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    const cartQuantity = cartItems.length;
    const cartItemsTotal = cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    const addCoffeeToCart = (coffee: CartItem) => {
        const coffeeAlreadyExistInCart = cartItems.find((cartItem) => cartItem.id === coffee.id);

        if (coffeeAlreadyExistInCart) {
            const newCart = cartItems.map((item) => item.id === coffee.id ? { ...item, quantity: item.quantity += coffee.quantity } : item);
            setCartItems(newCart);
        } else {
            setCartItems(prev => [...prev, { ...coffee, quantity: coffee.quantity }]);
        }

    }

    const changeCartItemQuantity = (cartItemId: number, type: "increase" | "decrease") => {
        const coffeeAlreadyExistInCart = cartItems.find((cartItem) => cartItem.id === cartItemId);
        const newCart = cartItems.map(cartItem => {
            if (cartItem.id === cartItemId) {
                return {
                    ...cartItem,
                    quantity: type === "increase" ? cartItem.quantity + 1 : cartItem.quantity - 1,
                }
            }
            return cartItem;
        });
        setCartItems(() => newCart);

    }

    const removeCartItem = (cartItemId: number) => {
        const newCart = cartItems.filter(cartItem => cartItem.id !== cartItemId);
        setCartItems(() => newCart);
    }

    const cleanCart = () => {
        setCartItems([]);
    }


    // useEffect(() => {
    //     localStorage.setItem(COFFEE_CART_STORAGE, JSON.stringify(cartItems));
    // }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartQuantity,
                cartItemsTotal,
                addCoffeeToCart,
                changeCartItemQuantity,
                removeCartItem,
                cleanCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
