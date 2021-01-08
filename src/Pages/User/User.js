import { useState, useEffect } from 'react'
import User from '../../Components/User';
import hideModal from '../Story/Functions/hideModal';
import showModal from '../Story/Functions/showModal';
import ModalTypeConstants from '../../Constants/ModalTypeConstants';
import AuthModalContainer from '../../Container/AuthModal';
import { useCookies } from 'react-cookie';
import getMe from '../Story/Functions/getMe';

const UserPage = () => {
    const token = useCookies(['auth'])[0].auth;
    const [modalShow, setModalShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN);
    const [logged_in, setlogged_in] = useState(false);
    const [me, setme] = useState({
        id: null,
    });
    const userinfo = {
        img: 'https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png',
        name: 'UserName',
        userinfo: 'UserInfo',
        url: '/user/0',
    };
    useEffect(() => {
        setlogged_in(token !== undefined);
        getMe(token, setme);
    }, [token]);
    return (
        <div>
            <User
                showModal={modalType => showModal(modalType, setModalShow, setModalVisible, setModalType)}
                userinfo={userinfo}
                logged_in={logged_in}
                me={me}
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
