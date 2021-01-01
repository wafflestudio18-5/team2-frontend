import styled from 'styled-components';

const LargeWrapper = styled.figure`
    display: block;
    background: white;
    z-index: 1;
    max-width: 1192px;
    min-width: 0;
    width: 100%;
    word-break: break-word;
    margin: 0 64px;
    justify-content: center;
    box-sizing: border-box;
    @media (max-width: 728px) {
        margin: 0;
    }
`;

export default LargeWrapper;
