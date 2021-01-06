import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Response from '../Response';

const StoryStyle = styled.div``;
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
    targetRef
}) => {
    return (
        <StoryStyle>
            <Header showModal={showModal} userinfo={userinfo} logged_in={logged_in} me={me} />
            <Main
                reachScrollCheckPoint={reachScrollCheckPoint}
                story={story}
                tag={tag}
                storyinfo={storyinfo}
                userinfo={userinfo}
                setOpen={setResponseOpen}
                ResponseNum={responseNum}
            />
            <Response
                logged_in={logged_in}
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
        </StoryStyle>
    );
};

export default Story;
