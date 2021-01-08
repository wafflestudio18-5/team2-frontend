import { getUserUseridAbout } from '../../../api';

const getUserAbout = async (userid, setuser) => {
    getUserUseridAbout(userid)
        .then(response => {
            setuser(response.data)
        })
        .catch(error => console.log(error));
};

export default getUserAbout;
