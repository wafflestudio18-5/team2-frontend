import Story from '../../Components/Story';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ModalTypeConstants from '../../Constants/ModalTypeConstants';
import AuthModalContainer from '../../Container/AuthModal';
import StoryExample from '../../Constants/StoryExample';
import { useCookies } from 'react-cookie';
import hideModal from './Functions/hideModal';
import showModal from './Functions/showModal';
import getStory from './Functions/getStory';

const StoryPage = () => {
    const token = useCookies(['auth'])[0].auth;
    const logged_in = token !== undefined;
    // AuthModal 화면 표시 여부 관리하는 state
    const [modalShow, setModalShow] = useState(false);

    // AuthModal이 사라질 때 애니메이션을 실행시키기 위한 state.
    const [modalVisible, setModalVisible] = useState(false);

    const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN);

    // Modal이 떠있는 동안 scroll 고정
    useEffect(() => {
        if (modalVisible === true) {
            document.body.style.cssText = `overflow: hidden; top: -${window.scrollY}px`;
            return () => {
                const scrollY = document.body.style.top;
                document.body.style.cssText = `position: ""; top: "";`;
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            };
        }
    }, [modalVisible]);

    const [reachScrollCheckPoint, setReachScrollCheckPoint] = useState(false);
    window.addEventListener('scroll', () => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;
        if (scrollTop >= 300 && scrollTop + clientHeight < scrollHeight - 10) {
            setReachScrollCheckPoint(true);
        } else {
            setReachScrollCheckPoint(false);
        }
    });

    const { story_id } = useParams(); //이용해서 해당하는 유저, 스토리 가져오기
    console.log(story_id, setuserinfo, setstoryinfo);

    const [userinfo, setuserinfo] = useState();
    const [storyinfo, setstoryinfo] = useState();
    const [tag, settag] = useState([]);
    const [me, setme] = useState();

    useEffect(() => {
        getStory(story_id, setuserinfo, setstoryinfo);
    });

    useEffect(() => {
        getme(token, setme);
    }, [token]);

    //sample
    /*const userinfo = {
        img: 'https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png',
        name: 'UserName',
        userinfo: 'UserInfo',
        url: '/user/0',
    };
    const storyinfo = {
        title: 'Title',
        subtitle: 'Subtitle',
        clapnum: 0,
        responsenum: 0,
        url: '/story/0',
        date: 'Nov 30',
        time: '9 min'
    };
    const tag = [
        { name: 'tag', url: '/tag/tag' },
        { name: 'long tag', url: '/tag/long_tag' },
        { name: 'long long tag', url: '/tag/long_long_tag' },
    ];

    const me = {
        id: 2,
        name: 'MyName',
        img: 'https://avatars2.githubusercontent.com/u/28915633?s=60&v=4',
    }
*/
    const SampleResponse = [
        {
            id: 11,
            story_id: 35,
            writer: {
                id: 2,
                username: 'test2',
                name: 'Test',
                profile_image: 'https://miro.medium.com/fit/c/40/40/0*4PODeqnOnEXxzfru.jpg',
            },
            body:
                "If this actually this happened as you described, the complexity of its response is fascinating.\n It didn't have the answer, so it had the character deflect the question, but then it dramatically built tension in the story until a kind of resolution was offered in sort of a post-modern existentialist tenor.\nIf this actually this happened as you described, the complexity of its response is fascinating.\n It didn't have the answer, so it had the character deflect the question, but then it dramatically built tension in the story until a kind of resolution was offered in sort of a post-modern existentialist tenor.",
            created_at: '2021-01-02T14:33:56.000808Z',
            updated_at: '2021-01-02T14:33:56.000808Z',
            time: '1 month',
        },
        {
            id: 11,
            story_id: 35,
            writer: {
                id: 1,
                username: 'test1',
                name: 'UserName',
                profile_image: 'https://miro.medium.com/fit/c/40/40/0*X9ChD_1bVEj-sgTx.',
            },
            body:
                'Very important side note: gpt-3 does not think. Given an input of words it formulates an output of words. It doesn’t “know” anything and doesn’t “understand” anything as we do. It also doesn’t consider humanity nor can it grasp the concept of anything.\nThat being said, the accomplishment of its creators is truly amazing and its output yields very intriguing results. It’s at the very forefront in the field of ai and a step towards understanding the complexities of what thinking and understanding encompasses.',
            created_at: '2021-01-02T14:33:56.000808Z',
            updated_at: '2021-01-02T14:40:17.751885Z',
            time: '1 month',
        },
    ];

    const [InputValue, setInputValue] = useState('');
    const [Response, setResponse] = useState(SampleResponse);
    const [ResponseInput, setResponseInput] = useState(false);
    const [ResponseOpen, setResponseOpen] = useState(false);
    return (
        <div>
            <Story
                showModal={modalType => showModal(modalType, setModalShow, setModalVisible, setModalType)}
                reachScrollCheckPoint={reachScrollCheckPoint}
                story={storyinfo.body}
                storyinfo={storyinfo}
                userinfo={userinfo}
                tag={[]}
                logged_in={logged_in}
                me={me}
                response={Response}
                ResponseOpen={ResponseOpen}
                setResponseOpen={setResponseOpen}
                ResponseInput={ResponseInput}
                setResponseInput={setResponseInput}
                InputValue={InputValue}
                setInputValue={setInputValue}
            />
            {modalShow && (
                <AuthModalContainer
                    hideModal={() => hideModal(setModalVisible, setModalShow)}
                    modalVisible={modalVisible}
                    ModalType={ModalType}
                />
            )}
        </div>
    );
};

export default StoryPage;
