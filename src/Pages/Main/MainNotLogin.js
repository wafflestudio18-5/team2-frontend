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
    const [modalShow, setModalShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN);
    const [trendingPosts, setTrendingPosts] = useState([]);

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

    const [fetching, setFetching] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const page = useRef(1);
    const targetRef = useRef(null);

    const loadNextPage = useCallback(async () => {
        if (Article.length > 0) {
            setFetching(true);
            page.current++;
            await fetchArticles(setArticle, setIsEnd, page.current);
            setFetching(false);
        }
    }, [Article]);

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
