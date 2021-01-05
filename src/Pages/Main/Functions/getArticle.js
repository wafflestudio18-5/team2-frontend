import { getStoryPage } from '../../../api';

const getArticle = async (setArticle, setStopFetch, token = '') => {
    try {
        const response = await getStoryPage(token, 1);
        if(response.data.next === null)
            setStopFetch(true);
        setArticle(response.data.stories);
    } catch (error) {
        console.log(error);
    }
};

export default getArticle;
