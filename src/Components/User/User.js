import Header from '../Story/Header';
import Footer from '../Story/Main/Footer';
import UserDropdown from '../MainLogin/UserDropdown';

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
            {isDropdownOpened && <UserDropdown user={me} signOut={signOut} hideDropdown={hideDropdown} />}
            <Footer />
        </div>
    );
};

export default User;
