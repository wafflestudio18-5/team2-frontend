import styled from 'styled-components';
import Header from './Header';
import Main from './Main';

const StoryStyle = styled.div``;
const Story = ({ showModal, reachScrollCheckPoint }) => {
    return (
        <StoryStyle>
            <Header showModal={showModal} />
            <Main reachScrollCheckPoint={reachScrollCheckPoint} />
        </StoryStyle>
    );
};

export default Story;
