import styled from "styled-components";
import { RegularTextProps } from ".";


export const RegularTextStyle = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`text-regular-${size}`]};
  line-height: 130%;
  font-weight: ${({ weight }) => weight };
`;