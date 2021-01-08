import { getUserUseridStory } from '../../../api';

const getUserStory = async (userid, setStory, setIsEnd, history, pagenum = 1) => {
    try{
        const response = await getUserUseridStory(userid, pagenum)
        setStory(stories => {
            return [...stories, ...(response.data.stories)];
        });
        if (response.data.next === null) {
            setIsEnd(true);
        }
    }
    catch(error){
        console.log(error);
        history.push('/error');
    }
}
export default getUserStory;
