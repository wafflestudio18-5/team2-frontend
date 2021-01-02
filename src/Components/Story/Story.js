import styled from 'styled-components';
import Header from './Header';
import Main from './Main';

const StoryStyle = styled.div``;
const Story = ({ showModal, reachScrollCheckPoint, story, storyinfo, userinfo, tag, logged_in, me }) => {
    return (
        <StoryStyle>
            <Header showModal={showModal} userinfo={userinfo} logged_in={logged_in} me={me} />
            <Main reachScrollCheckPoint={reachScrollCheckPoint} story={story} tag={tag} storyinfo={storyinfo} userinfo={userinfo} />
        </StoryStyle>
    );
};

export default Story;
