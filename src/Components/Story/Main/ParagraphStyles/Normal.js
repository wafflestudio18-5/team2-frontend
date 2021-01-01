import styled from 'styled-components';
import Color from '../../../../Constants/Color';

const Normal = styled.p`
    letter-spacing: -0.003em;
    line-height: 32px;
    margin-top: 2em;
    font-size: 21px;
    margin-bottom: -0.46em;
    font-family: 'Lora';
    font-style: normal;
    word-break: break-word;
    font-weight: 400;
    color: ${Color.borderblack};
    text-decoration: none;
    :focus {
        outline: 0;
    }
    a {
        color: inherit
    }
`;

export default Normal;
