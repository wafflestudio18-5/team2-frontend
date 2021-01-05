import { getStoryPage } from '../../../api';

const getArticle = (setArticle, setStopFetch, token = '') => {
    getStoryPage(token, 1)
        .then(response => {
            if (response.data.detail !== 'Invalid page.' && response.data.count !== 0) {
                if (response.data.next === null) setStopFetch(true);
                var stories = response.data.stories;
                stories[stories.length - 1].next = response.data.next;
                setArticle(stories);
            } else {
                setStopFetch(true);
            }
        })
        .catch(error => console.log(error));
};

export default getArticle;
