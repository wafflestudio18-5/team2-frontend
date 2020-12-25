import styled from 'styled-components';
import Color from '../../../Constants/Color';
import ModalTypeConstants from '../../../Constants/ModalTypeConstants'

const HeaderRightWrapper = styled.div`
    display: flex;
    flex: 0 0 auto; 
    z-index: 500;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-end;
`;

const SigninBlock = styled.div`
    display: block;
`

const Signin = styled.a`
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: ${Color.green};
    line-height: 20px;
    cursor: pointer;
`

const HeaderRight = ( {showModal} ) => {
    return (
        <HeaderRightWrapper>
            <SigninBlock>
                <Signin onClick={() => {
              showModal(ModalTypeConstants.LOG_IN)
            }}>Sign in</Signin>
            </SigninBlock>
        </HeaderRightWrapper>
    )
};

export default HeaderRight;
