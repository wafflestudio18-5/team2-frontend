import styled from 'styled-components';
import Tag from './Tag';
import UserEnd from './UserEnd';
import MoreFromWriter from './MoreFromWriter';

const StoryEndWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const StoryEndBlock = styled.div`
    display: block;
    margin: 0 64px;
    max-width: 680px;
    min-width: 0px;
    width: 100%;
    @media (max-width: 728px) {
        margin: 0 24px;
    }
    @media (max-width: 904px) and (min-width: 728px) {
        margin: 0 48px;
    }
`;

const Blank1 = styled.div`
    display: block;
    padding-top: 40px;
`;

const Blank2 = styled.div`
    display: block;
    padding-top: 25px;
`;
const StoryEnd = ({ tag, storyinfo, userinfo, setOpen, ResponseNum, deleteStory, me, openConfirmModal }) => {
    return (
        <StoryEndWrapper>
            <StoryEndBlock>
                <Blank1 />
                <UserEnd
                    storyinfo={storyinfo}
                    setOpen={setOpen}
                    ResponseNum={ResponseNum}
                    deleteStory={deleteStory}
                    me={me}
                    userinfo={userinfo}
                    openConfirmModal={openConfirmModal}
                />
                <Tag tag={tag} />
                <Blank1 />
                <MoreFromWriter userinfo={userinfo} />
                <Blank2 />
            </StoryEndBlock>
        </StoryEndWrapper>
    );
};

export default StoryEnd;
