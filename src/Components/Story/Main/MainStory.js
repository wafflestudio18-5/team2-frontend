import styled from 'styled-components';
import Color from '../../../Constants/Color';
import Writer from './Writer'
import Content from './Content'

const MainWrapper = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 680px;
    min-width: 0;
    width: 100%;
    word-break: break-word;
`;

const Kicker = styled.h2`
    margin-top: 3.88em;
    text-transform: uppercase;
    margin-bottom: -0.31em;
    font-size: 13px;
    font-style: normal;
    letter-spacing: 0.077em;
    line-height: 18px;
    color: ${Color.gray};
    font-weight: 400;
    font-family: "NotoSans";
    word-break: break-word;
`

const Title = styled.div`
    letter-spacing: -0.011em;
    line-height: 56px;
    margin-top: 0.17em;
    font-size: 46px;
    margin-bottom: -0.27em;
    font-style: normal;
    font-weight: bold;
    word-break: break-word;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${Color.borderBlack};
`;

const SubTitle = styled.h2`
    font-size: 22px;
    margin-bottom: -0.42em;
    font-style: normal;
    letter-spacing: 0;
    color: ${Color.gray};
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
`

const StoryBlock = styled.div`
    margin-right: auto;
    margin-left: auto;
`;

const MainStory = ( {story} ) => {
    let article = []
    story.forEach((section) => {
        article.push(
            <StoryBlock>
                {section.map((content) => {
                    return <Content content={content} />
                })}
            </StoryBlock>
        )
    })
    return(
        <MainWrapper>
            <Kicker>Kicker</Kicker>
            <Title>Title</Title>
            <SubTitle>Subtitle</SubTitle>
            <Writer />
            {article}
        </MainWrapper>
    );
};

export default MainStory;
