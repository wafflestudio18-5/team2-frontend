import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Response from '../Response';

const StoryStyle = styled.div``;
const Story = ({ showModal, reachScrollCheckPoint, story, storyinfo, userinfo, tag, logged_in, me }) => {
    const SampleResponse = [
        {
            id: 11,
            story_id: 35,
            writer: {
                id: 2,
                username: 'test2',
                name: 'Test',
                profile_image: 'https://miro.medium.com/fit/c/40/40/0*4PODeqnOnEXxzfru.jpg',
            },
            body: 'Wow.',
            created_at: '2021-01-02T14:33:56.000808Z',
            updated_at: '2021-01-02T14:40:17.751885Z',
            time: '1 month'
        },
    ];
    return (
        <StoryStyle>
            <Header showModal={showModal} userinfo={userinfo} logged_in={logged_in} me={me} />
            <Main reachScrollCheckPoint={reachScrollCheckPoint} story={story} tag={tag} storyinfo={storyinfo} userinfo={userinfo} />
            <Response IsOpen={true} Response={SampleResponse} />
        </StoryStyle>
    );
};

export default Story;
