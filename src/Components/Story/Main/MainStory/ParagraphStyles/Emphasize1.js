import styled from 'styled-components';
import Color from '../../../../../Constants/Color';

const Emphasize1 = styled.blockquote`
    margin-left: -20px;
    padding-left: 23px;
    box-shadow: inset 3px 0 0 0 ${Color.borderBlack};
    letter-spacing: -0.003em;
    line-height: 32px;
    margin-top: 2em;
    font-size: 21px;
    margin-bottom: -0.46em;
    font-family: 'Lora';
    font-style: italic;
    color: ${Color.borderBlack} !important;
    font-weight: 400;
    word-break: break-word;
    box-sizing: border-box;
    :focus {
        outline: 0;
    }
    a {
      color: inherit
    }
`;

export default Emphasize1;
