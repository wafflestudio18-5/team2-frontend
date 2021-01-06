import styled, { css } from 'styled-components';
import Color from '../../Constants/Color';
import ResponseWriter from './ResponseWriter';
import ResponseContent from './ResponseContent';

const ResponseWrapper = styled.div`
    display: block;
    padding: 0 24px;
    ${props =>
        props.idcmp==true &&
        css`
            background: rgba(26, 137, 23, 0.1);
        `}
`;

const ResponseBlock = styled.div`
    display: block;
    padding-bottom: 16px;
    padding-top: 25px;
    border-bottom: 1px solid ${Color.lightGray};
`;

const ResponseComponent = ({ Response, me, deleteResponse }) => {
    return (
        <ResponseWrapper idcmp={Response.writer.id === me.id}>
            <ResponseBlock>
                <ResponseWriter Response={Response} me={me} deleteResponse={deleteResponse} />
                <ResponseContent Response={Response} />
            </ResponseBlock>
        </ResponseWrapper>
    );
};

export default ResponseComponent;
