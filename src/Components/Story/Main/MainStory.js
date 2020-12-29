import styled from 'styled-components';
import Color from '../../../Constants/Color';
import Writer from './Writer'

const MainWrapper = styled.div`
    display: block;
    margin: 0 auto;
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

const StoryBlock = styled.div`
    margin-top: 33px;
    margin-right: auto;
    margin-left: auto;
`;

const StoryImageBlock = styled.div`
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
            <Title>Title</Title>
            <Writer />
            <StoryBlock>
                <StoryImageBlock>
                    <img
                        width="100%"
                        src="https://miro.medium.com/max/1750/0*COGrSeNR23C-F84U.jpeg"
                        srcset="https://miro.medium.com/max/345/0*COGrSeNR23C-F84U.jpeg 276w, https://miro.medium.com/max/690/0*COGrSeNR23C-F84U.jpeg 552w, https://miro.medium.com/max/800/0*COGrSeNR23C-F84U.jpeg 640w, https://miro.medium.com/max/875/0*COGrSeNR23C-F84U.jpeg 700w"
                        sizes="700px"
                        alt="Sample Image"
                    />
                </StoryImageBlock>
            </StoryBlock>
            <StoryBlock>
                <Story>Short Sample Text</Story>
            </StoryBlock>
            <StoryBlock>
                <Story>
                    Long Sample Text Long Sample Text Long Sample Text Long Sample Text Long Sample Text Long Sample Text Long Sample Text
                </Story>
            </StoryBlock>
            <StoryBlock>
                <Story>
                    Long Sample Text Long Sample Text Long Sample Text Long Sample Text Long Sample Text Long Sample Text Long Sample Text
                </Story>
            </StoryBlock>
            <StoryBlock>
                <Story>Short Sample Text</Story>
            </StoryBlock>
            <StoryBlock>
                <Story>Short Sample Text</Story>
            </StoryBlock>
        </MainWrapper>
    );
};

export default MainStory;
