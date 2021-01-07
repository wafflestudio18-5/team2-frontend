import styled from 'styled-components';
import Color from '../../../../Constants/Color';

const MoreFromWriterWrapper = styled.div`
    display: block;
    padding-top: 32px;
    padding-bottom: 4px;
`;

const MoreFromWriterBlock = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 680px;
    width: 100%;
`;

const WriterNameBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const WriterName = styled.a`
    margin: 0;
    padding: 0;
    max-height: 24px;
    line-height: 24px;
    font-size: 20px;
    letter-spacing: 0;
    font-weight: 700;
    color: ${Color.borderBlack};
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-decoration: none;
`;

const FollowButton = styled.button`
    display: inline-block;
    padding: 4px 12px 6px;
    text-decoration: none;
    border-styled: solid;
    border-width: 1px;
    border-radius: 4px;
    border-color: ${Color.hoverGreen};
    background: 0;
    fill: ${Color.hoverGreen};
    color: ${Color.hoverGreen};
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
    cursor: pointer;
`;
const WriterInfoBlock = styled.div`
    display: block;
    padding-top: 5px;
    padding-right: 168px;
`;

const WriterInfo = styled.p`
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${Color.gray};
    font-weight: 400;
    margin: 0;
`;

const MoreFromWriter = ({userinfo}) => {
    return (
        <MoreFromWriterWrapper>
            <MoreFromWriterBlock>
                <WriterNameBlock>
                    <WriterName href={userinfo.url}>{userinfo.name}</WriterName>
                </WriterNameBlock>
                <WriterInfoBlock>
                    <WriterInfo>{userinfo.userinfo}</WriterInfo>
                </WriterInfoBlock>
            </MoreFromWriterBlock>
        </MoreFromWriterWrapper>
    );
};

export default MoreFromWriter;
