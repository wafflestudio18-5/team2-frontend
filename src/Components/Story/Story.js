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
            body: "If this actually this happened as you described, the complexity of its response is fascinating.\n It didn't have the answer, so it had the character deflect the question, but then it dramatically built tension in the story until a kind of resolution was offered in sort of a post-modern existentialist tenor.\nIf this actually this happened as you described, the complexity of its response is fascinating.\n It didn't have the answer, so it had the character deflect the question, but then it dramatically built tension in the story until a kind of resolution was offered in sort of a post-modern existentialist tenor.",
            created_at: '2021-01-02T14:33:56.000808Z',
            updated_at: '2021-01-02T14:33:56.000808Z',
            time: '1 month'
        },
        {
            id: 11,
            story_id: 35,
            writer: {
                id: 1,
                username: 'test1',
                name: 'UserName',
                profile_image: 'https://miro.medium.com/fit/c/40/40/0*X9ChD_1bVEj-sgTx.',
            },
            body: 'Very important side note: gpt-3 does not think. Given an input of words it formulates an output of words. It doesn’t “know” anything and doesn’t “understand” anything as we do. It also doesn’t consider humanity nor can it grasp the concept of anything.\nThat being said, the accomplishment of its creators is truly amazing and its output yields very intriguing results. It’s at the very forefront in the field of ai and a step towards understanding the complexities of what thinking and understanding encompasses.',
            created_at: '2021-01-02T14:33:56.000808Z',
            updated_at: '2021-01-02T14:40:17.751885Z',
            time: '1 month'
        },
    ];
    return (
        <StoryStyle>
            <Header showModal={showModal} userinfo={userinfo} logged_in={logged_in} me={me} />
            <Main reachScrollCheckPoint={reachScrollCheckPoint} story={story} tag={tag} storyinfo={storyinfo} userinfo={userinfo} />
            <Response IsOpen={true} Response={SampleResponse} me={me} />
        </StoryStyle>
    );
};

export default Story;
