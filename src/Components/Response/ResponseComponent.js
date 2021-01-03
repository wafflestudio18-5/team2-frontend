import styled from 'styled-components';
import Color from '../../Constants/Color'
import ResponseWriter from './ResponseWriter';

const ResponseWrapper = styled.div`
    display: block;
    padding: 0 24px;
`

const ResponseBlock = styled.div`
    display: block;
    padding-bottom: 16px;
    padding-top: 25px;
    border-bottom: 1px solid ${Color.lightGray};
`

const ResponseComponent = ({Response}) => {
    return(
        <ResponseWrapper>
            <ResponseBlock>
                <ResponseWriter Response={Response} />
            </ResponseBlock>
        </ResponseWrapper>
    );
}

export default ResponseComponent;