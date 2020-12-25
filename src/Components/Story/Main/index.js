import styled from 'styled-components';
import About from './About';
import MainStory from './MainStory';
import StoryEnd from './StoryEnd';
import Footer from './Footer';

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    word-break: break-word;
`;

const Main = ({ reachScrollCheckPoint }) => {
    return (
        <MainWrapper>
            <MainStory />
            <About reachScrollCheckPoint={reachScrollCheckPoint} />
        </MainWrapper>
    );
};

export default Main;
