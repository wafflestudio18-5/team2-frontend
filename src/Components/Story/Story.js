import styled from 'styled-components';
import Header from './Header';
import Main from './Main';

const StoryStyle = styled.div``;
const Story = ({ showModal, reachScrollCheckPoint, story }) => {
    return (
        <StoryStyle>
            <Header showModal={showModal} />
            <Main reachScrollCheckPoint={reachScrollCheckPoint} story={story} />
        </StoryStyle>
    );
};

export default Story;
