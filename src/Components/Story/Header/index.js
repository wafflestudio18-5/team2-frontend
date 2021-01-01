import styled from 'styled-components';
import Color from '../../../Constants/Color';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const HeaderWrapper = styled.div`
    display: flex;
    margin: 0 0 36px;
    width: 100%;
    border-bottom: solid 1px ${Color.lightGray};
    min-height: 115px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 728px) {
        height: 231px;
    }
`;

const HeaderBlock = styled.div`
    display: flex;
    width: 100%;
    padding: 0 20px;
    max-width: 1192px;
    box-sizing: inherit;
    min-height: 115px;
    flex-direction: row;
    align-items: center;
    margin: 0 64px;
    @media (max-width: 728px){
        margin: 0 24px;
        flex-direction: column;
    }
    @media (max-width: 904px) and (min-width: 728px){
        margin: 0 48px;
    }
`;


const Header = ({ showModal, userinfo }) => {
    console.log("width: "+window.innerWidth);
    return (
        <HeaderWrapper>
            <HeaderBlock>
                <HeaderLeft userinfo={userinfo} />
                <HeaderRight showModal={showModal} />
            </HeaderBlock>
        </HeaderWrapper>
    );
};

export default Header;
