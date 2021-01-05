import { getStoryPage } from '../../../api';

const updateArticle = (setArticle, Article, setStopFetch, token = '') => {
    getStoryPage(token, parseInt(Article.length / 10) + 1)
        .then(response => {
            setArticle(article => {
                if (response.data.next === null) setStopFetch(true);
                var stories = response.data.stories;
                stories[stories.length-1].next = response.data.next;
                if (article[article.length - 1].next !== null)
                    return [...article, ...stories];
                else 
                    return article;
            });
        })
        .catch(error => console.log(error));
};

export default updateArticle;
