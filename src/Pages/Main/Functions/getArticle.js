import { getStoryPage } from '../../../api';

const getArticle = (setArticle, setStopFetch, token = '') => {
    getStoryPage(token, 1)
        .then(response => {
            if (response.data.next === null) setStopFetch(true);
            var stories = response.data.stories;
            stories[stories.length-1].next = response.data.next;
            setArticle(stories);
        })
        .catch(error => console.log(error));
};

export default getArticle;
