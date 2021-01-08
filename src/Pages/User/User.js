import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import User from '../../Components/User';
import hideModal from '../Story/Functions/hideModal';
import showModal from '../Story/Functions/showModal';
import ModalTypeConstants from '../../Constants/ModalTypeConstants';
import AuthModalContainer from '../../Container/AuthModal';
import { useCookies } from 'react-cookie';
import getMe from '../Story/Functions/getMe';
import getUserAbout from './Functions/getUserAbout';
import onClickSearchButton from '../Main/Functions/onClickSearchButton';
import onChangeSearchbox from '../Main/Functions/onChangeSearchbox';
import search from '../Search/Functions/search';
import logout from '../Main/Functions/logout';

const UserPage = () => {
    const history = useHistory();
    const { user_id } = useParams();
    const token = useCookies(['auth'])[0].auth;
    const removeCookie = useCookies(["auth"])[2]
    const [modalShow, setModalShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN);
    const [logged_in, setlogged_in] = useState(false);
    const [me, setme] = useState({
        id: null,
    });

    const [user, setuser] = useState({ id: null });
    useEffect(() => {
        setlogged_in(token !== undefined);
        getMe(token, setme);
        getUserAbout(user_id, setuser, history);
    }, [token]);

    const [InputValue, setInputValue] = useState('');

    const [isSearchboxOpen, setIsSearchboxOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isDropdownOpened, setIsDropdownOpened] = useState(false);

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

    return (
        <div>
            <User
                showModal={modalType => showModal(modalType, setModalShow, setModalVisible, setModalType)}
                userinfo={user}
                logged_in={logged_in}
                me={me}
                InputValue={InputValue}
                setInputValue={setInputValue}
                history={history}
                isSearchboxOpen={isSearchboxOpen}
                onClickSearchButton={() =>
                    onClickSearchButton(isSearchboxOpen, setIsSearchboxOpen, history)
                }
                onChangeSearchbox={(event) => onChangeSearchbox(event, setSearchValue)}
                search={(event) => search(event, searchValue, history)}
                isDropdownOpened={isDropdownOpened}
                openDropdown={() => setIsDropdownOpened(true)}
                hideDropdown={() => setIsDropdownOpened(false)}
                signOut={() => logout(token, removeCookie)}
                reachScrollCheckPoint={reachScrollCheckPoint}
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

export default UserPage;
