import { getStoryPage } from '../../../api';

const getArticle = async (setArticle, token = '') => {
    try {
        const response = await getStoryPage(token, 1);
        setArticle(response.data.stories);
    } catch (error) {
        console.log(error);
    }
};

export default getArticle;
