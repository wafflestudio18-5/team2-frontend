import styled from 'styled-components';
import Tag from './Tag'
import UserEnd from './UserEnd'

const StoryEndWrapper = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 680px;
    min-width: 0px;
    width: 100%;
`;

const StoryEnd = () => {
    return (
        <StoryEndWrapper>
            <UserEnd />
            <Tag />
        </StoryEndWrapper>
    );
};

export default StoryEnd;
