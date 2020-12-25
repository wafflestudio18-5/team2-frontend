import styled from 'styled-components';
import Header from './Header';
import Main from './Main';

const StoryStyle = styled.div``;
const Story = ({showModal}) => {
    return (
        <StoryStyle>
            <Header showModal={showModal}/>
            <Main />
        </StoryStyle>
    );
};

export default Story;
