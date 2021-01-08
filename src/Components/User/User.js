import Header from '../Story/Header';
import Footer from '../Story/Main/Footer';
import UserDropdown from '../MainLogin/UserDropdown';
import Main from './Main';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const InnerWrapper = styled.div`
    flex: 1 0 auto;
`;

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
    UserStory,
    targetRef,
}) => {
    return (
        <Wrapper>
            <InnerWrapper>
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
                <Main reachScrollCheckPoint={reachScrollCheckPoint} userinfo={userinfo} targetRef={targetRef} UserStory={UserStory} me={me} />
                {isDropdownOpened && <UserDropdown user={me} signOut={signOut} hideDropdown={hideDropdown} />}
            </InnerWrapper>
            <Footer />
        </Wrapper>
    );
};

export default User;
