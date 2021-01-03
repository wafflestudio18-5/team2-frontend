import styled from 'styled-components';
import ResponseComponent from './ResponseComponent';

const ResponseListWrapper = styled.div`
    display: block;
`

const ResponseListBlock = ( {Response, me} ) => {
    let ResponseList = []
    Response.forEach(response => {
        ResponseList.push(<ResponseComponent Response={response} me={me} />)
    });
    return(
        <ResponseListWrapper>
            {ResponseList}
        </ResponseListWrapper>
    );
}

export default ResponseListBlock;