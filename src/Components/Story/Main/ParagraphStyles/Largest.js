import styled from 'styled-components';
import Color from '../../../../Constants/Color';

const Largest = styled.h3`
    line-height: 36px;
    margin-top: 1.95em;
    font-size: 30px;
    letter-spacing: 0;
    margin-bottom: -0.28em;
    font-weight: bold;
    font-style: normal;
    color: ${Color.borderBlack};
    font-family: 'NotoSans';
    word-break: break-word;
    :focus {
        outline: 0;
    }
`;

export default Largest;
