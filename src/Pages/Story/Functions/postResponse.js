import { postComment } from '../../../api';

const postResponse = async (token, response, storyid, setResponse, setResponseNum) => {
    try {
        const postrespond = await postComment(token, response, storyid);
        setResponse(responses => {
            console.log(...responses)
            return [...responses, postrespond.data];
        });
        setResponseNum(num => {return num+1})
    } catch (error) {
        console.log(error);
    }
};

export default postResponse;
