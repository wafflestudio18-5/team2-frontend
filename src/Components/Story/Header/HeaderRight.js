import styled from 'styled-components';
import Color from '../../../Constants/Color';

const HeaderRightWrapper = styled.div`
    display: flex;
    flex: 0 0 auto; 
    z-index: 500;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-end;
`;

const HeaderRight = () => {
    return (
        <HeaderRightWrapper>
            Right
        </HeaderRightWrapper>
    )
};

export default HeaderRight;
