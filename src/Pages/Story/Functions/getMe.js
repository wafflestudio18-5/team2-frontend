import { getUserMeAbout } from '../../../api';

const getMe = async (token, setme) => {
    getUserMeAbout(token)
        .then(response => {
            setme(response.data)
        })
        .catch(error => console.log(error));
};

export default getMe;
