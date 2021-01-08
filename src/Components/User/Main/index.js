import styled from 'styled-components';
import About from './About';
import StoryList from './StoryList'

const MainWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
    word-break: break-word;
    flex-direction: column;
`;

const StoryWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Main = ({ reachScrollCheckPoint, userinfo, targetRef, UserStory, me }) => {
    return (
        <MainWrapper>
            <About reachScrollCheckPoint={reachScrollCheckPoint} userinfo={userinfo} />
            <StoryWrapper>
                <StoryList UserStory={UserStory} targetRef={targetRef} me={me} userinfo={userinfo}/>
            </StoryWrapper>
        </MainWrapper>
    );
};

export default Main;
