import { postComment } from '../../../api';

const postResponse = async (token, response, storyid, setResponse, setResponseNum) => {
    postComment(token, response, storyid)
        .then(postrespond => {
            setResponse(responses => {
                console.log(...responses);
                return [...responses, postrespond.data];
            });
            setResponseNum(num => {
                return num + 1;
            });
        })
        .catch(error => console.log(error));
};

export default postResponse;
