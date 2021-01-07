import { getResponse } from '../../../api';

const fetchResponse = async (setResponse, setResponseNum, setIsEnd, storyid, page = 1) => {
    console.log(page);
    try {
        const response = await getResponse(storyid, page)
        setResponseNum(response.data.count)
        setResponse(responses => {
            return [...responses, ...response.data.stories];
        });
        if (response.data.next === null) {
            setIsEnd(true);
        }
    } catch (error) {
        console.log(error);
    }
};

export default fetchResponse;
