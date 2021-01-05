import { getStoryPage } from '../../../api';

const getArticle = (setArticle, setStopFetch, token = '') => {
    getStoryPage(token, 1)
        .then(response => {
            if (response.data.next === null) setStopFetch(true);
            setArticle(response.data.stories);
        })
        .catch(error => console.log(error));
};

export default getArticle;
