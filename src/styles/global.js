// dependencies
import { createGlobalStyle } from "styled-components";
// styles
import { color } from "./settings";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${color.white};
    color: ${color.blackLight};
    font-family: system-ui;
    font-size: ${18 / 16}rem;
  }
`;

export default GlobalStyles;
