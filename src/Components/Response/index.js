import styled, { css } from 'styled-components';
import ResponseHeader from './ResponseHeader';
import ResponseInput from './ResponseInput';
import ResponseBlock from './ResponseBlock';

const ResponseModal = styled.div`
    display: block;
`

const ResponseCloser = styled.div`
    transition: opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    background-color: rgba(0, 0, 0, 0.08);
    left: 0;
    top: 0;
    cursor: pointer;
    height: 100%;
    position: fixed;
    width: 100%;
    display: none;
    z-index: 2;
    ${props =>
        props.IsOpen &&
        css`
            display: block;
        `}
`


const ResponseWrapper = styled.div`
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s, opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    transform: translateX(0px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
    left: 100%;
    background: white;
    z-index: 3;
    width: 414px;
    top: 0px;
    height: 100%;
    box-sizing: border-box;
    position: fixed;
    display: none;
    overflow-y: auto;
    ${props =>
        props.IsOpen &&
        css`
            transform: translateX(-415px);
            display: block;
        `}
`;

const Response = ({ IsOpen, setOpen, Response, me }) => {
    console.log(IsOpen)
    return (
        <ResponseModal>
            <ResponseWrapper IsOpen={IsOpen}>
                <ResponseHeader ResponseNum={Response.length}  setOpen={setOpen}/>
                <ResponseInput />
                <ResponseBlock Response={Response} me={me}/>
            </ResponseWrapper>
            <ResponseCloser IsOpen={IsOpen} onClick={()=>setOpen(false)}/>
        </ResponseModal>
    );
};

export default Response;
