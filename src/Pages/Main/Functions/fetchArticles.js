import { getStoryPage } from '../../../api';

const fetchArticles = async (setArticle, setIsEnd, page = 1, token="") => {
    try {
        const response = await getStoryPage(token, page);
        console.log(response);
        setArticle(articles => {
            return [...articles, ...response.data.stories];
        });
        if (response.data.next === null) {
            setIsEnd(true);
        }
    } catch (error) {
        console.log(error);
    }
};

export default fetchArticles;
