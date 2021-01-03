import styled from 'styled-components';
import Color from '../../Constants/Color';

const ResponseInputWrapper = styled.div`
    margin-bottom: 20px;
    padding-top: 20px;
    padding: 0 24px;
    display: block;
`

const ResponseInputBlock = styled.div`
    padding-bottom: 0px;
    padding-top: 0px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px;
    flex-direction: column;
    background-color: white;
    display: flex;
`

const ResponseInput = () => {
    return(
        <ResponseInputWrapper>
            <ResponseInputBlock>Response</ResponseInputBlock>
        </ResponseInputWrapper>
    );
}

export default ResponseInput;