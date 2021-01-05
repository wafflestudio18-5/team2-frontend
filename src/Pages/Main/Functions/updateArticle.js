import { getStoryPage } from '../../../api';

const updateArticle = async (setArticle, Article, setStopFetch, token = '') => {
    try {
        const response = await getStoryPage(token, parseInt(Article.length / 10) + 1);
        if (response.data.next === null) {
            setStopFetch(true);
        }
        setArticle(Article.concat(response.data.stories));
    } catch (error) {
        console.log(error);
    }
};

export default updateArticle;
