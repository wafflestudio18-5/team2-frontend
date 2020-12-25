import styled from 'styled-components';
import Color from '../../../Constants/Color';

const MainWrapper = styled.div`
    display: block;
    margin: 0 64px;
    max-width: 680px;
    min-width: 0;
    width: 100%;
    word-break: break-word;
`;

const Title = styled.div`
    letter-spacing: -0.011em;
    line-height: 56px;
    margin-top: 0.6em;
    font-size: 46px;
    margin-bottom: -0.27em;
    font-style: normal;
    font-weight: 700;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;
const WriterWrapper = styled.div`
    margin-top: 32px;
    display: block;
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

const StoryBlock = styled.div`
    margin-top: 33px;
    margin-right: auto;
    margin-left: auto;
`;

const StoryImageBlock = styled.div`
    transition: transform 300ms cubic-bezier(0.2, 0, 0.2, 1);
    cursor: zoom-in;
    background: ${Color.backgroundGray};
    width: 100%;
    max-width: 1400px;
`;
const Story = styled.p`
    letter-spacing: -0.003em;
    line-height: 32px;
    font-size: 21px;
    font-weight: 400;
    font-family: charter, Georgia, Cambria, 'Times New Roman', Times, serif;
    font-style: normal;
    color: ${Color.borderBlack};
    word-break: break-word;
    margin: 0;
`;

const MainStory = () => {
    return (
        <MainWrapper>
            <Title>I created my own YouTube algorithm to stop me wasting time.</Title>
            <WriterWrapper>
                <WriterBlock>
                    <WriterLeft>
                        <a href="https://medium.com/@unintelligents">
                            <WriterPicture src="https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png" />
                        </a>
                        <WriterInfoBlock>
                            <WriterNameBlock>
                                <WriterName href="https://medium.com/@unintelligents">Unintelligents</WriterName>
                            </WriterNameBlock>
                            <DateAndTimeSpan>
                                <DateAndTime href="/main/story">&nbsp;&nbsp;Nov 30&nbsp;&middot;&nbsp;9 min read</DateAndTime>
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
            <StoryBlock>
                <StoryImageBlock>
                    <img
                        width="100%"
                        src="https://miro.medium.com/max/1750/0*COGrSeNR23C-F84U.jpeg"
                        srcset="https://miro.medium.com/max/345/0*COGrSeNR23C-F84U.jpeg 276w, https://miro.medium.com/max/690/0*COGrSeNR23C-F84U.jpeg 552w, https://miro.medium.com/max/800/0*COGrSeNR23C-F84U.jpeg 640w, https://miro.medium.com/max/875/0*COGrSeNR23C-F84U.jpeg 700w"
                        sizes="700px"
                    />
                </StoryImageBlock>
            </StoryBlock>
            <StoryBlock>
                <Story>
                    I love viewing YouTube recordings that improve my life in some unmistakable manner. Shockingly, the YouTube calculation
                    disagrees. It jumps at the chance to take care of me misleading content and other trash.
                </Story>
            </StoryBlock>
            <StoryBlock>
                <Story>This isn’t too astonishing. The calculation organizes snaps and watch time.</Story>
            </StoryBlock>
        </MainWrapper>
    );
};

export default MainStory;
