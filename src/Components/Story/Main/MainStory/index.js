import styled from 'styled-components';
import Color from '../../../../Constants/Color';
import Writer from './Writer'
import Content from './Content'
import MainBlock from './MainBlock'

const StoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const MainCenterize = styled.div`
    display: block;
    max-width: 680px;
    width: 100%;
    word-break: break-word;
    justify-content: center;
    box-sizing: border-box;
`

const Blank = styled.div`
    margin-top: 3.88em;
    
    @media (max-width: 728px) {
        margin-top: 2.64em;   
    }
`

const Kicker = styled.h2`
    text-transform: uppercase;
    margin-bottom: -0.31em;
    font-size: 13px;
    font-style: normal;
    letter-spacing: 0.077em;
    line-height: 18px;
    color: ${Color.gray};
    font-weight: 400;    
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    word-break: break-word;
    width: 100%;
    box-sizing: border-box;
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
    width: 100%;
    box-sizing: border-box;
`;

const SubTitle = styled.h2`
    font-size: 22px;
    margin-bottom: -0.42em;
    font-style: normal;
    letter-spacing: 0;
    color: ${Color.gray};
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    width: 100%;
    box-sizing: border-box;
`

const MainStory = ( {story, userinfo, storyinfo} ) => {
    let article = []
    story.forEach((section) => {
        article.push(
            <Content section={section} />
        )
    })
    return(
        <StoryWrapper>
            <MainWrapper>
                <MainBlock>
                    <Blank />
                    <Title>{storyinfo.title}</Title>
                    <SubTitle>{storyinfo.subtitle}</SubTitle>
                    <Writer userinfo={userinfo} storyinfo={storyinfo} />
                </MainBlock>    
            </MainWrapper>
            {article}
        </StoryWrapper>
    );
};

export default MainStory;
