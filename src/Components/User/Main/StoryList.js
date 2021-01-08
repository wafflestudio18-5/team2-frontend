import styled from 'styled-components';
import StoryBlock from './StoryBlock'

const StoryListStyle = styled.div`
    margin: 0 64px;
    max-width: 680px;
    width: 100%;
`;


const StoryList = ({ UserStory, targetRef }) => {
    return (
        <StoryListStyle>
            {UserStory.map((story, index) => {
                return <StoryBlock story={story} />;
            })}
            <div ref={targetRef} />
        </StoryListStyle>
    );
};

export default StoryList;
