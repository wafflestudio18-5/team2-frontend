import styled, { css } from 'styled-components';

const MainBlock = styled.div`
    display: block;
    max-width: 680px;
    min-width: 0;
    width: 100%;
    word-break: break-word;
    margin: 0 64px;
    justify-content: center;
    box-sizing: border-box;
    @media (max-width: 728px){
        margin: 0 24px;
    }
    @media (max-width: 904px) and (min-width: 728px){
        margin: 0 48px;
    }
    ${(props) =>
        props.marginzero &&
        css`
          margin: 0;
        `}
`;

export default MainBlock;