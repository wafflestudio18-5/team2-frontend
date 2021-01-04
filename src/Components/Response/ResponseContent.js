import styled from 'styled-components';
import Color from '../../Constants/Color';

const ResponseContentWrapper = styled.div`
    margin-top: 5px;
    display: block;
`;

const ResponseContentBlock = styled.div`
    padding: 5px 0;
    display: block;
`;

const ResponseContentLetter = styled.h4`
    color: ${Color.borderBlack};
    line-height: 24px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
`;

const ResponseContent = ({ Response }) => {
    return Response.body.split('\n').map(line => {
        return (
            <ResponseContentWrapper>
                <ResponseContentBlock>
                    <ResponseContentLetter>{line}</ResponseContentLetter>
                </ResponseContentBlock>
            </ResponseContentWrapper>
        );
    });
};

export default ResponseContent;
