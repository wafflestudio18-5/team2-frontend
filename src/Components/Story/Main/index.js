import styled from 'styled-components';
import About from './About';
import MainStory from './MainStory';
import StoryEnd from './StoryEnd';
import Footer from './Footer';

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    word-break: break-word;
    flex-direction: column;
`;

const Main = ({ reachScrollCheckPoint, story }) => {
    return (
        <MainWrapper>
            <About reachScrollCheckPoint={reachScrollCheckPoint} />
            <MainStory story={story}/>
            <StoryEnd />
            <Footer />
        </MainWrapper>
    );
};

export default Main;
