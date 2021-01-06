import { getStoryById } from '../../../api';

const getStory = async (story_id, setuserinfo, setstoryinfo, setstory) => {
    getStoryById(story_id)
        .then(response => {
            setuserinfo(response.data.writer)
            setstoryinfo(response.data)
            setstory(response.data.body)
        })
        .catch(error => console.log(error));
};

export default getStory;
