import { postResponse } from '../../../api';

const postResponse = async (token, response, storyid) => {
    try {
        await postResponse(token, response, storyid);
    } catch (error) {
        console.log(error);
    }
};

export default postResponse;
