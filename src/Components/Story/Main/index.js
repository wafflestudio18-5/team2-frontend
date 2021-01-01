import styled from 'styled-components';
import About from './About';
import MainStory from './MainStory';
import StoryEnd from './StoryEnd';
import Footer from './Footer';

const MainWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
    word-break: break-word;
    flex-direction: column;
`;

const Main = ({ reachScrollCheckPoint, story, tag, storyinfo, userinfo }) => {
    return (
        <MainWrapper>
            <About reachScrollCheckPoint={reachScrollCheckPoint} userinfo={userinfo} storyinfo={storyinfo} />
            <MainStory story={story} userinfo={userinfo} storyinfo={storyinfo}/>
            <StoryEnd storyinfo={storyinfo} tag={tag} userinfo={userinfo} />
            <Footer />
        </MainWrapper>
    );
};

export default Main;