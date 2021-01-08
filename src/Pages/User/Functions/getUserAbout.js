import { getUserUseridAbout } from '../../../api';

const getUserAbout = async (userid, setuser, history) => {
    getUserUseridAbout(userid)
        .then(response => {
            setuser(response.data)
        })
        .catch(error => {
            console.log(error)
            history.push('/error')
        });
};

export default getUserAbout;
