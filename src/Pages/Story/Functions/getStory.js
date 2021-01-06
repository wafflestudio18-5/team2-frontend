import { getStoryById } from '../../../api';

const getCurrentUser = async (story_id, setuserinfo, setstoryinfo) => {
    getStoryById(story_id)
        .then(response => {
            setuserinfo(response.data.writer)
            setstoryinfo(response.data)
        })
        .catch(error => console.log(error));
};

export default getCurrentUser;
