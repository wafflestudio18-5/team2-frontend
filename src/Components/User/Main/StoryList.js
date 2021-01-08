import styled from 'styled-components';
import StoryBlock from './StoryBlock';

const StoryListStyle = styled.div`
    margin: 0 64px;
    max-width: 680px;
    width: 100%;
    @media (max-width: 728px) {
        margin: 0 24px;
    }
    @media (max-width: 904px) and (min-width: 728px) {
        margin: 0 48px;
    }
`;

const EmptyText = styled.h4`
    line-height: 24px;
    font-size: 16px;
    color: rgba(117, 117, 117, 1);
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    text-align: center;
    min-height: 
`;

const WriteText = styled.a``;

const StoryList = ({ UserStory, targetRef }) => {
    if (UserStory.length !== 0)
        return (
            <StoryListStyle>
                {UserStory.map((story, index) => {
                    return <StoryBlock story={story} />;
                })}
                <div ref={targetRef} />
            </StoryListStyle>
        );
    else
        return (
            <StoryListStyle>
                <EmptyText>
                    Have something to share?
                    <WriteText href="/edit">Write your first story</WriteText>
                </EmptyText>
            </StoryListStyle>
        );
};

export default StoryList;
