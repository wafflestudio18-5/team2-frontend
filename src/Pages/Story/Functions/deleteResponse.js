import { deleteComment } from '../../../api';

const deleteResponse = async (token, storyid, commentid, setResponse, setResponseNum) => {
    deleteComment(token, storyid, commentid)
        .then(() => {
            window.location.reload()
        })
        .catch(error => console.log(error));
};

export default deleteResponse;
