import { getStoryPage } from '../../../api';

const updateArticle = async (setArticle, Article, token = '') => {
    try {
        const response = await getStoryPage(token, parseInt(Article.length / 10) + 1);
        setArticle(Article.concat(response.data.stories));
    } catch (error) {
        console.log(error);
    }
};

export default updateArticle;
