import { postComment } from '../../../api';

const postResponse = async (token, response, storyid, setResponse, setResponseNum) => {
    postComment(token, {body: response}, storyid)
        .then(() => {
            window.location.reload()
        })
        .catch(error => console.log(error));
};

export default postResponse;
