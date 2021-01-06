import { getResponse } from '../../../api';

const fetchResponse = async (setResponse, setResponseNum, setIsEnd, storyid, page = 1) => {
    console.log(page);
    try {
        //const response = await getResponse(storyid, page);
        const response = {data:
            {
                "count": 10,
                "next": null,
                "previous": null,
                "stories": [
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                    {
                        "id": 10,
                        "story_id": 35,
                        "writer": {
                            "id": 2,
                            "username": "test2",
                            "name": "Test",
                            "profile_image": ""
                        },
                        "body": 'This story helped me a lot.',
                        "created_at": "2021-01-01T14:33:56.000808Z",
                        "updated_at": "2021-01-01T14:40:17.751885Z",
                    },
                ]
            }
        }
        console.log(response);
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
