import { getStoryPage } from '../../../api';

const updateArticle = (setArticle, Article, setStopFetch, token = '') => {
    getStoryPage(token, parseInt(Article.length / 10) + 1)
    .then(response => {
        if (response.data.next === null) setStopFetch(true);
        setArticle(Article.concat(response.data.stories));
    })
    .catch(error => console.log(error));
};

export default updateArticle;
