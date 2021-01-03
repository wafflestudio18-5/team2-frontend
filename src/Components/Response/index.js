import styled, { css } from 'styled-components';

const ResponseWrapper = styled.div`
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s, opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    transform: translateX(0px);
    aria-hidden: true;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
    left: 100%;
    background: white;
    z-index: 2;
    width: 414px;
    top: 0px;
    height: 100%;
    box-sizing: border-box;
    position: fixed;
    display: block;
    ${props =>
        props.IsOpen &&
        css`
            transform: translateX(-415px);
            aria-hidden: false;
        `}
`;

const Response = ({ IsOpen }) => {
    return <ResponseWrapper IsOpen={IsOpen}>ResponseBlock</ResponseWrapper>;
};

export default Response;