import { createGlobalStyle } from "styled-components"
import GTSuper from "./GT-Super-Display-Light.woff2"

export default createGlobalStyle`
@font-face {
    font-family: "GTSuper";
    src: url(${GTSuper}) format('woff2');
}
`
