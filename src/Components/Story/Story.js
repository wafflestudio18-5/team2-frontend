import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Response from '../Response';
import UserDropdown from "../MainLogin/UserDropdown"

const StoryStyle = styled.div`
`;
const Story = ({
    showModal,
    reachScrollCheckPoint,
    story,
    storyinfo,
    userinfo,
    tag,
    logged_in,
    me,
    response,
    responseNum,
    ResponseOpen,
    setResponseOpen,
    ResponseInput,
    setResponseInput,
    postResponse,
    deleteResponse,
    InputValue,
    setInputValue,
    targetRef,
    history,
    isSearchboxOpen,
    onClickSearchButton,
    onChangeSearchbox,
    search,
    openDropdown,
    signOut,
    isDropdownOpened,
    hideDropdown,
    deleteStory,
    editStory,
}) => {
    return (
        <StoryStyle>
            <Header
                showModal={showModal}
                userinfo={userinfo}
                logged_in={logged_in}
                me={me}
                isSearchboxOpen={isSearchboxOpen}
                onClickSearchButton={onClickSearchButton}
                onChangeSearchbox={onChangeSearchbox}
                search={search}
                openDropdown={openDropdown}
            />
            <Main
                reachScrollCheckPoint={reachScrollCheckPoint}
                story={story}
                tag={tag}
                storyinfo={storyinfo}
                userinfo={userinfo}
                setOpen={setResponseOpen}
                ResponseNum={responseNum}
                history={history}
                deleteStory={deleteStory}
                editStory={editStory}
                me={me}
            />
            <Response
                logged_in={logged_in}
                showModal={showModal}
                IsOpen={ResponseOpen}
                setOpen={setResponseOpen}
                Response={response}
                me={me}
                responseInput={ResponseInput}
                setResponseInput={setResponseInput}
                InputValue={InputValue}
                setInputValue={setInputValue}
                targetRef={targetRef}
                ResponseNum={responseNum}
                postResponse={postResponse}
                deleteResponse={deleteResponse}
            />
            {isDropdownOpened && (
                <UserDropdown
                  user={me}
                  signOut={signOut}
                  hideDropdown={hideDropdown}
                />
              )}
        </StoryStyle>
    );
};

export default Story;
