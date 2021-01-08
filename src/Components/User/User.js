import Header from '../Story/Header';
import Footer from '../Story/Main/Footer';
import UserDropdown from '../MainLogin/UserDropdown';
import Main from './Main'

const User = ({
    showModal,
    userinfo,
    logged_in,
    me,
    isSearchboxOpen,
    onClickSearchButton,
    onChangeSearchbox,
    search,
    openDropdown,
    signOut,
    isDropdownOpened,
    hideDropdown,
    reachScrollCheckPoint,
    targetRef,
}) => {
    return (
        <div>
            <Header
                showModal={showModal}
                userinfo={userinfo}
                logged_in={logged_in}
                me={me}
                isSearchboxOpen={isSearchboxOpen}
                onClickSearchButton={onClickSearchButton}
                onChangeSearchbox={onChangeSearchbox}
                search={search}
                openDropdown={openDropdown}
            />
            <Main reachScrollCheckPoint={reachScrollCheckPoint} userinfo={userinfo} targetRef={targetRef}/>
            <Footer />
            {isDropdownOpened && <UserDropdown user={me} signOut={signOut} hideDropdown={hideDropdown} />}
        </div>
    );
};

export default User;
