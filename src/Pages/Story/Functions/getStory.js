import { getStoryById } from '../../../api';

const getStory = async (story_id, setuserinfo, setstoryinfo, setstory, history) => {
    getStoryById(story_id)
        .then(response => {
            setuserinfo(response.data.writer)
            setstoryinfo(response.data)
            setstory(response.data.body)
        })
        .catch(error => {
            console.log(error)
            history.push('/error')
        });
};

export default getStory;
