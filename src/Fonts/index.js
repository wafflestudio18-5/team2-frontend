import { createGlobalStyle } from "styled-components"
import Lora from "./Lora.ttf"
import NotoSans from "./NotoSans.ttf"

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Lora';
        src: url(${Lora});
    }

    @font-face {
        font-family: 'NotoSans';
        src: url(${NotoSans});
    }
`

export default Fonts
