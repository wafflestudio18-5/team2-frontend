import Story from '../../Components/Story';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ModalTypeConstants from '../../Constants/ModalTypeConstants';
import AuthModalContainer from '../../Container/AuthModal';
import StoryExample from '../../Constants/StoryExample';

const StoryPage = () => {
    // AuthModal 화면 표시 여부 관리하는 state
    const [modalShow, setModalShow] = useState(false);

    // AuthModal이 사라질 때 애니메이션을 실행시키기 위한 state.
    const [modalVisible, setModalVisible] = useState(false);

    const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN);
    // Modal 다시 숨김. hideModal이 호출되면 modalVisible이 false로 바뀌고,
    // 이 때 100ms짜리 fadeOut 애니메이션이 실행, 100ms 이후 modalShow가 false가 되면서 실제로 modal이 사라짐.
    const hideModal = () => {
        setModalVisible(false);
        setTimeout(() => setModalShow(false), 100);
    };

    // ModalType을 입력받아 이에 해당하는 Modal을 화면에 표시
    const showModal = ModalType => {
        setModalShow(true);
        setModalVisible(true);
        setModalType(ModalType);
    };

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
        console.log(scrollTop, scrollTop + clientHeight - scrollHeight);
        if (scrollTop >= 300 && scrollTop + clientHeight < scrollHeight - 10) {
            setReachScrollCheckPoint(true);
        } else {
            setReachScrollCheckPoint(false);
        }
    });

    const { story_id } = useParams(); //이용해서 해당하는 유저, 스토리 가져오기
    console.log( story_id );

    //sample
    const userinfo = {
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
        name: 'MyName',
        img: 'https://avatars2.githubusercontent.com/u/28915633?s=60&v=4',
    }

    const logged_in = false;

    return (
        <div>
            <Story
                showModal={showModal}
                reachScrollCheckPoint={reachScrollCheckPoint}
                story={StoryExample}
                storyinfo={storyinfo}
                userinfo={userinfo}
                tag={tag}
                logged_in={logged_in}
                me={me}
            />
            {modalShow && <AuthModalContainer hideModal={hideModal} modalVisible={modalVisible} ModalType={ModalType} />}
        </div>
    );
};

export default StoryPage;
