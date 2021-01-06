import { deleteComment } from '../../../api';

const deleteResponse = async (token, storyid, commentid, setResponse, setResponseNum) => {
    deleteComment(token, storyid, commentid)
        .then(() => {
            setResponse(responses => {
                console.log(...responses);
                return responses.filter(response => {
                    return response.id != commentid;
                })
            });
            setResponseNum(num => {
                return num - 1;
            });
        })
        .catch(error => console.log(error));
};

export default deleteResponse;
