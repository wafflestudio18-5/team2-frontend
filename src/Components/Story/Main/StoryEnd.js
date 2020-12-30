import styled from 'styled-components';
import Tag from './Tag'
import UserEnd from './UserEnd'
import MoreFromWriter from './MoreFromWriter'

const StoryEndWrapper = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 680px;
    min-width: 0px;
    width: 100%;
`;

const Blank = styled.div`
    display: block;
`

const StoryEnd = () => {
    return (
        <StoryEndWrapper>
            <UserEnd />
            <Tag />
            <Blank padding-top="40px"/>
            <MoreFromWriter />
            <Blank padding-top="25px"/>
        </StoryEndWrapper>
    );
};

export default StoryEnd;
