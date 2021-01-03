import styled from 'styled-components';

const ResponseHeaderWrapper = styled.div`
    padding: 24px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    display: flex;

`

const ResponseHeader = () => {
    return(
        <ResponseHeaderWrapper>
            Header
        </ResponseHeaderWrapper>
    );
}

export default ResponseHeader;