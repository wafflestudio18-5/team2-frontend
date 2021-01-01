import styled from 'styled-components';
import Color from '../../../Constants/Color';

const WriterWrapper = styled.div`
    margin-top: 32px;
    display: block;
    @media (max-width: 728px) {
        margin-top: 64px;
    }
`;
const WriterBlock = styled.div`
    justify-content: space-between;
    display: flex;
    word-break: break;
    flex-direction: row;
`;
const WriterLeft = styled.div`
    align-items: center;
    display: flex;
`;
const WriterPicture = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: block;
    vertical-align: middle;
    margin: 0;
`;

const WriterInfoBlock = styled.div`
    margin-left: 12px;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
`;

const WriterNameBlock = styled.div`
    display: block;
    flex: 1;
`;

const WriterName = styled.a`
    text-decoration: none;
    color: ${Color.green};
    cursor: pointer;
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
`;

const DateAndTimeSpan = styled.span`
    line-height: 20px;
`;
const DateAndTime = styled.a`
    text-decoration: none;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${Color.gray};
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.03em;
    margin: 0;
`;

const WriterRight = styled.div`
    display: flex;
    margin-left: 30px;
    align-items: flex-end;

    @media (max-width: 728px) {
        display: none;
    }
`;

const IconBlock = styled.div`
    display: flex;
    align-items: center;
`;

const IconButtonStyle = styled.div`
    display: block;
    padding-right: 8px;
`;

const IconButton = styled.button`
    margin: 0;
    padding: 0;
    background: 0;
    border: 0;
    cursor: pointer;
`;

const IconButtonAType = styled.a`
    fill: ${Color.gray};
    &:hover {
        fill: ${Color.black};
    }
    cursor: pointer;
`;

const Writer = ({userinfo, storyinfo}) => {
    return (
        <WriterWrapper>
            <WriterBlock>
                <WriterLeft>
                    <a href={userinfo.url}>
                        <WriterPicture src={userinfo.img} />
                    </a>
                    <WriterInfoBlock>
                        <WriterNameBlock>
                            <WriterName href={userinfo.url}>{userinfo.name}</WriterName>
                        </WriterNameBlock>
                        <DateAndTimeSpan>
                            <DateAndTime href={storyinfo.url}>&nbsp;&nbsp;{storyinfo.date}&nbsp;&middot;&nbsp;{storyinfo.time} read</DateAndTime>
                        </DateAndTimeSpan>
                    </WriterInfoBlock>
                </WriterLeft>
                <WriterRight>
                    <IconBlock>
                        <IconButtonStyle>
                            <IconButton>
                                <svg width="25" height="25" class="r">
                                    <g fill-rule="evenodd">
                                        <path d="M15.6 5a.42.42 0 0 0 .17-.3.42.42 0 0 0-.12-.33l-2.8-2.79a.5.5 0 0 0-.7 0l-2.8 2.8a.4.4 0 0 0-.1.32c0 .12.07.23.16.3h.02a.45.45 0 0 0 .57-.04l2-2V10c0 .28.23.5.5.5s.5-.22.5-.5V2.93l2.02 2.02c.08.07.18.12.3.13.11.01.21-.02.3-.08v.01"></path>
                                        <path d="M18 7h-1.5a.5.5 0 0 0 0 1h1.6c.5 0 .9.4.9.9v10.2c0 .5-.4.9-.9.9H6.9a.9.9 0 0 1-.9-.9V8.9c0-.5.4-.9.9-.9h1.6a.5.5 0 0 0 .35-.15A.5.5 0 0 0 9 7.5a.5.5 0 0 0-.15-.35A.5.5 0 0 0 8.5 7H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"></path>
                                    </g>
                                </svg>
                            </IconButton>
                        </IconButtonStyle>
                        <IconButtonStyle>
                            <IconButtonAType>
                                <svg width="25" height="25" viewBox="0 0 25 25">
                                    <path
                                        d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                            </IconButtonAType>
                        </IconButtonStyle>
                    </IconBlock>
                </WriterRight>
            </WriterBlock>
        </WriterWrapper>
    );
};

export default Writer;
