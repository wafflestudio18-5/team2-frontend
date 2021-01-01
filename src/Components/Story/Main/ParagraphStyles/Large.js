import styled from 'styled-components';
import Color from '../../../../Constants/Color';

const Large = styled.h4`
    letter-spacing: 0;
    margin-top: 1.72em;
    line-height: 28px;
    font-size: 22px;
    margin-bottom: -0.31em;
    font-weight: bold;
    font-style: normal;
    color: ${Color.borderBlack};
    font-family: 'NotoSans';
    word-break: break-word;
    :focus {
        outline: 0;
    }
    a {
      color: inherit
    }
`;

export default Large;
