import { getUserUseridStory } from '../../../api';

const getUserStory = async (userid, setStory, setIsEnd, pagenum = 1) => {
    getUserUseridStory(userid, pagenum)
        .then(response => {
            setStory(stories => {
                return [...stories, ...response.data.stories];
            });
            if (response.data.next === null) {
              setIsEnd(true)
            }
        })
        .catch(error => {
            console.log(error);
            history.push('/error');
        });
};

export default getUserStory;
