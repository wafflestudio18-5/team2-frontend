import { getUserMeAbout } from '../../../api';

const getCurrentUser = async (token, setme) => {
    getUserMeAbout(token)
        .then(response => {
            setme(response.data)
        })
        .catch(error => console.log(error));
};

export default getCurrentUser;
