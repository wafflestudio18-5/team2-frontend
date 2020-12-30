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

const Blank1 = styled.div`
    display: block;
    padding-top: 40px;
`

const Blank2 = styled.div`
    display: block;
    padding-top: 25px;
`
const StoryEnd = () => {
    return (
        <StoryEndWrapper>
            <UserEnd />
            <Tag />
            <Blank1 />
            <MoreFromWriter />
            <Blank2 />
        </StoryEndWrapper>
    );
};

export default StoryEnd;
