import { getStoryById } from '../../../api';

const getCurrentUser = async (story_id, setuserinfo, setstoryinfo, setStory) => {
    getStoryById(story_id)
        .then(response => {
            setuserinfo(response.data.writer)
            setstoryinfo(response.data)
            setStory(response.data.body)
        })
        .catch(error => console.log(error));
};

export default getCurrentUser;
