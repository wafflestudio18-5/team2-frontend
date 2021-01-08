import Story from '../../Components/Story';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ModalTypeConstants from '../../Constants/ModalTypeConstants';
import AuthModalContainer from '../../Container/AuthModal';
import { useCookies } from 'react-cookie';
import hideModal from './Functions/hideModal';
import showModal from './Functions/showModal';
import getStory from './Functions/getStory';
import getMe from './Functions/getMe';
import useIntersectionObserver from '../Search/Functions/useIntersectionObserver';
import fetchResponse from './Functions/fetchResponse';
import postResponse from './Functions/postResponse';
import deleteResponse from './Functions/deleteResponse';
import onClickSearchButton from '../Main/Functions/onClickSearchButton';
import onChangeSearchbox from '../Main/Functions/onChangeSearchbox';
import search from '../Search/Functions/search';
import logout from '../Main/Functions/logout';

const StoryPage = () => {

    const history = useHistory();
    const token = useCookies(['auth'])[0].auth;
    const removeCookie = useCookies(['auth'])[2];
    // AuthModal 화면 표시 여부 관리하는 state
    const [modalShow, setModalShow] = useState(false);
    const [logged_in, setlogged_in] = useState(false);
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

    const [Response, setResponse] = useState([]);
    const [ResponseNum, setResponseNum] = useState(0);
    const [fetching, setFetching] = useState(false);
    // check current page is end
    const [isEnd, setIsEnd] = useState(false);
    // 현재 검색된 마지막 페이지
    const page = useRef(1);
    // target
    const targetRef = useRef(null);

    // 다음 페이지 로드
    const loadNextPage = useCallback(async () => {
        if (Response.length > 0) {
            setFetching(true);
            page.current++;
            await fetchResponse(setResponse, setResponseNum, setIsEnd, story_id, page.current);
            setFetching(false);
        }
    }, [Response]);

    // 스크롤이 끝에 닿으면 다음 페이지 요청
    useIntersectionObserver({
        target: targetRef.current,
        onIntersect: ([{ isIntersecting }]) => {
            if (isIntersecting && !fetching && !isEnd) {
                loadNextPage();
            }
        },
    });

    const { story_id } = useParams(); //이용해서 해당하는 유저, 스토리 가져오기

    const [userinfo, setuserinfo] = useState(null);
    const [storyinfo, setstoryinfo] = useState(null);
    const [tag, settag] = useState([]);
    const [me, setme] = useState({
        id: null,
    });
    const [story, setstory] = useState([]);

    useEffect(() => {
        setlogged_in(token !== undefined);
        getStory(story_id, setuserinfo, setstoryinfo, setstory, history);
        fetchResponse(setResponse, setResponseNum, setIsEnd, story_id);
        getMe(token, setme);
    }, [token]);

    const [InputValue, setInputValue] = useState('');
    const [ResponseInput, setResponseInput] = useState(false);
    const [ResponseOpen, setResponseOpen] = useState(false);

    const [isSearchboxOpen, setIsSearchboxOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isDropdownOpened, setIsDropdownOpened] = useState(false);

    if (userinfo === null || storyinfo === null) return <div />;
    else
        return (
            <div>
                <Story
                    showModal={modalType => showModal(modalType, setModalShow, setModalVisible, setModalType)}
                    reachScrollCheckPoint={reachScrollCheckPoint}
                    story={story}
                    storyinfo={storyinfo}
                    userinfo={userinfo}
                    tag={tag}
                    logged_in={logged_in}
                    me={me}
                    response={Response}
                    responseNum={ResponseNum}
                    ResponseOpen={ResponseOpen}
                    setResponseOpen={setResponseOpen}
                    ResponseInput={ResponseInput}
                    setResponseInput={setResponseInput}
                    postResponse={response => postResponse(token, response, story_id, setResponse, setResponseNum)}
                    deleteResponse={commentid => deleteResponse(token, story_id, commentid, setResponse, setResponseNum)}
                    InputValue={InputValue}
                    setInputValue={setInputValue}
                    targetRef={targetRef}
                    history={history}
                    isSearchboxOpen={isSearchboxOpen}
                    onClickSearchButton={() => onClickSearchButton(isSearchboxOpen, setIsSearchboxOpen, history)}
                    onChangeSearchbox={event => onChangeSearchbox(event, setSearchValue)}
                    search={event => search(event, searchValue, history)}
                    isDropdownOpened={isDropdownOpened}
                    openDropdown={() => setIsDropdownOpened(true)}
                    hideDropdown={() => setIsDropdownOpened(false)}
                    signOut={() => logout(token, removeCookie)}
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
