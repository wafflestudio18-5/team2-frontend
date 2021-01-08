import styled from 'styled-components';
import ResponseComponent from './ResponseComponent';

const ResponseListWrapper = styled.div`
    display: block;
`


const ResponseListBlock = ( {Response, me, deleteResponse, targetRef} ) => {
    let ResponseList = []
    Response.forEach(response => {
        ResponseList.push(<ResponseComponent Response={response} me={me} deleteResponse={deleteResponse} />)
    });
    ResponseList.pop();
    ResponseList.push(<ResponseComponent Response={Response[Response.length-1]} me={me} deleteResponse={deleteResponse} />)
    return(
        <ResponseListWrapper>
            {ResponseList}
            <div ref={targetRef} />
        </ResponseListWrapper>
    );
}

export default ResponseListBlock;