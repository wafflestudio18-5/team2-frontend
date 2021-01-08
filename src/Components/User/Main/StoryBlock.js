import styled from 'styled-components';
import changeDate from '../../../Pages/Main/Functions/changeDate';
import Color from '../../../Constants/Color';
import Content from '../../Story/Main/MainStory/Content';

const StoryBlockWrapper = styled.div`
    margin-top: 32px;
    display: block;
`;

const StoryBlockBlock = styled.div`
    margin-top: 40px;
    box-sizing: content-box;
    margin-right: auto;
    margin-left: auto;
    display: block;
`;

const StoryContent = styled.div`
    display: block;
`;

const StoryTimeBlock = styled.div`
    display: flex;
    align-items: center;
`;

const StoryTime = styled.a`
    color: rgba(117, 117, 117, 1);
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
`;

const StoryContentBlock = styled.div`
    display: block;
`;

const Title = styled.a`
    letter-spacing: -0.014em;
    line-height: 44px;
    margin-top: 8px;
    font-size: 36px;
    margin-bottom: -0.27em;
    font-style: normal;
    font-weight: bold;
    word-break: break-word;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${Color.borderBlack};
    width: 100%;
    box-sizing: border-box;
    text-decoration: none;
`;

const SubTitle = styled.h2`
    font-size: 22px;
    margin-bottom: -0.42em;
    line-height: 28px;
    margin-top: 18px;
    font-style: normal;
    letter-spacing: 0;
    color: ${Color.gray};
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    width: 100%;
    box-sizing: border-box;
`;

const ArticleWrapper = styled.div`
    width: 100%;
    display: block;
    line-height: 1.2em;
    max-height: 48em;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const ReadMoreBlock = styled.div`
    margin-top: 34px;
    margin-bottom: 34px;
    display: block;
`

const ReadMore = styled.a`
    color: rgba(26,137,23,1);
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    text-decoration: none;
`

const SeperateLine = styled.hr`
    background-color: rgba(230,230,230,1);
    height: 1px;
    border: 0;
    margin: 0;
`

const StoryBlock = ({ story }) => {
    const Story = story.body;
    let article = [];
    var title, subtitle, storylist;
    if (Story[0] !== undefined) {
        title = Story[0][0].detail.content;
        if (Story[0][1] !== undefined && Story[0][1].detail.content === story.subtitle) subtitle = Story[0][1].detail.content;
        else subtitle = null;
        storylist = Array(Story[0].slice(2)).concat(Story.slice(1));
    } else storylist = Story;
    storylist.forEach(section => {
        article.push(
            <ArticleWrapper>
                <Content section={section} marginzero={true} />
            </ArticleWrapper>
        );
    });
    return (
        <StoryBlockWrapper>
            <StoryBlockBlock>
                <StoryContent>
                    <StoryTimeBlock>
                        <StoryTime href={'/story/' + story.id}>{changeDate(story.published_at)}</StoryTime>
                    </StoryTimeBlock>
                    <StoryContentBlock>
                        <Title href={'/story/' + story.id}>{title}</Title>
                        <SubTitle>{subtitle}</SubTitle>
                        {article}
                    </StoryContentBlock>
                    <ReadMoreBlock>
                        <ReadMore href={'/story/' + story.id} >Read More</ReadMore>
                    </ReadMoreBlock>
                </StoryContent>
            </StoryBlockBlock>
            <SeperateLine />
        </StoryBlockWrapper>
    );
};

export default StoryBlock;
