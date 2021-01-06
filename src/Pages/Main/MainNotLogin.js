import { useEffect, useState, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Main from '../../Components/Main';
import AuthModalContainer from '../../Container/AuthModal';
import ModalTypeConstants from '../../Constants/ModalTypeConstants';
import Topics from '../../Constants/Topics';
import hideModal from './Functions/hideModal';
import showModal from './Functions/showModal';
import getMainTrending from './Functions/getMainTrending';
import fetchArticles from './Functions/fetchArticles';
import useIntersectionObserver from '../Search/Functions/useIntersectionObserver';

const MainNotLoginPage = () => {
    //로그인 하지 않았을 때 페이지

    // 스크롤 될 때 header 색 변하는 로직
    const [reachScrollCheckPoint, setReachScrollCheckPoint] = useState(false);
    window.addEventListener('scroll', () => {
        let scrollLocation = document.documentElement.scrollTop;
        if (scrollLocation >= 400) {
            setReachScrollCheckPoint(true);
        } else {
            setReachScrollCheckPoint(false);
        }
    });

    const [Article, setArticle] = useState([]);
    // AuthModal 화면 표시 여부 관리하는 state
    const [modalShow, setModalShow] = useState(false);
    // AuthModal이 사라질 때 애니메이션을 실행시키기 위한 state.
    const [modalVisible, setModalVisible] = useState(false);
    // modal type을 결정하는 state
    const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN);
    const [trendingPosts, setTrendingPosts] = useState([]);

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

    // request state
    const [fetching, setFetching] = useState(false);
    // check current page is end
    const [isEnd, setIsEnd] = useState(false);
    // 현재 검색된 마지막 페이지
    const page = useRef(1);
    // target
    const targetRef = useRef(null);

    // 다음 페이지 로드
    const loadNextPage = useCallback(async () => {
        if (Article.length > 0) {
            setFetching(true);
            page.current++;
            await fetchArticles(setArticle, setIsEnd, page.current);
            setFetching(false);
        }
    }, [Article]);

    // 스크롤이 끝에 닿으면 다음 페이지 요청
    useIntersectionObserver({
        target: targetRef.current,
        onIntersect: ([{ isIntersecting }]) => {
            if (isIntersecting && !fetching && !isEnd) {
                loadNextPage();
            }
        },
    });

    useEffect(() => {
        getMainTrending(false, setTrendingPosts);
        fetchArticles(setArticle, setIsEnd);
    }, []);

    const history = useHistory();

    return (
        <div>
            <Main
                trendingPosts={trendingPosts}
                reachScrollCheckPoint={reachScrollCheckPoint}
                Articles={Article}
                Topics={Topics}
                showModal={modalType => showModal(modalType, setModalShow, setModalVisible, setModalType)}
                history={history}
            />
            <div ref={targetRef} />
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

export default MainNotLoginPage;
