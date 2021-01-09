import { createGlobalStyle } from "styled-components"
import Lora from "./Lora.ttf"
import NotoSansKR from "./NotoSansKR.otf"
import NanumMyeongjo from "./NanumMyeongjo.ttf"

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Lora';
        src: url(${Lora});
    }
    @font-face {
        font-family: "Lora";
        src: url(${NanumMyeongjo});
        unicode-range: U+AC00-D7A3;
    }

    @font-face {
        font-family: 'NotoSans';
        src: url(${NotoSansKR});
    }
`

export default Fonts
