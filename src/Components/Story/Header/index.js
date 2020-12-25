import styled from 'styled-components';
import Color from '../../../Constants/Color';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const HeaderWrapper = styled.div`
    display: flex;
    margin: 0 0 36px;
    width: 100vw;
    border-bottom: solid 1px ${Color.lightGray};
    min-height: 115px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const HeaderBlock = styled.div`
    display: flex;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1192px;
    box-sizing: inherit;
    min-height: 115px;
    flex-direction: row;
    align-items: center;
`;

const Header = ({ showModal }) => {
    return (
        <HeaderWrapper>
            <HeaderBlock>
                <HeaderLeft />
                <HeaderRight showModal={showModal} />
            </HeaderBlock>
        </HeaderWrapper>
    );
};

export default Header;
