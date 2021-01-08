import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import User from '../../Components/User';
import hideModal from '../Story/Functions/hideModal';
import showModal from '../Story/Functions/showModal';
import ModalTypeConstants from '../../Constants/ModalTypeConstants';
import AuthModalContainer from '../../Container/AuthModal';
import { useCookies } from 'react-cookie';
import getMe from '../Story/Functions/getMe';
import getUserAbout from './Functions/getUserAbout'

const UserPage = () => {
    const history = useHistory();
    const { user_id } = useParams();
    const token = useCookies(['auth'])[0].auth;
    const [modalShow, setModalShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [ModalType, setModalType] = useState(ModalTypeConstants.LOG_IN);
    const [logged_in, setlogged_in] = useState(false);
    const [me, setme] = useState({
        id: null,
    });
    const [user, setuser] = useState({id:null});
    useEffect(() => {
        setlogged_in(token !== undefined);
        getMe(token, setme);
        getUserAbout(user_id, setuser, history)
    }, [token]);
    return (
        <div>
            <User
                showModal={modalType => showModal(modalType, setModalShow, setModalVisible, setModalType)}
                userinfo={user}
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
