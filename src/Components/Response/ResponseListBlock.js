import styled from 'styled-components';
import ResponseComponent from './ResponseComponent';

const ResponseListWrapper = styled.div`
    display: block;
`


const ResponseListBlock = ( {Response, me, deleteResponse} ) => {
    let ResponseList = []
    Response.forEach(response => {
        ResponseList.push(<ResponseComponent Response={response} me={me} deleteResponse={deleteResponse} />)
    });
    return(
        <ResponseListWrapper class = "target">
            {ResponseList}
        </ResponseListWrapper>
    );
}

export default ResponseListBlock;