import styled from 'styled-components';
import Color from '../../../Constants/Color';
import ModalTypeConstants from '../../../Constants/ModalTypeConstants';

const HeaderRightWrapper = styled.div`
    display: flex;
    flex: 0 0 auto;
    z-index: 500;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: -18px;
`;

const SigninBlock = styled.div`
    display: block;
`;

const Signin = styled.a`
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: ${Color.green};
    line-height: 20px;
    cursor: pointer;
`;
const GetstartedBlock = styled.div`
    display: block;
    margin-top: -3px;
    margin-left: 14px;
    margin-bottom: -8px;
    margin-right: 24px;
`;

const Getstarted = styled.button`
    padding: 4px 12px 6px;
    text-decoration: none;
    display: inline-block;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    border-color: ${Color.green};
    font-size: 14px;
    line-height: 20px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    cursor: pointer;
    color: ${Color.green};
    background: 0;
`;

const HeaderRight = ({ showModal }) => {
    return (
        <HeaderRightWrapper>
            <SigninBlock>
                <Signin
                    onClick={() => {
                        showModal(ModalTypeConstants.LOG_IN);
                    }}
                >
                    Sign in
                </Signin>
            </SigninBlock>
            <GetstartedBlock>
                <Getstarted
                    onClick={() => {
                        showModal(ModalTypeConstants.SIGN_UP);
                    }}
                >
                    Get Started
                </Getstarted>
            </GetstartedBlock>
            <a href="/main/">
                <svg height="25px" viewBox="0 0 1043.63 592.71">
                    <g>
                        <path d="M588.67,296.36c0,163.67-131.78,296.35-294.33,296.35S0,460,0,296.36,131.78,0,294.34,0,588.67,132.69,588.67,296.36"></path>
                        <path d="M911.56,296.36c0,154.06-65.89,279-147.17,279s-147.17-124.94-147.17-279,65.88-279,147.16-279,147.17,124.9,147.17,279"></path>
                        <path d="M1043.63,296.36c0,138-23.17,249.94-51.76,249.94s-51.75-111.91-51.75-249.94S963.29,46.42,991.87,46.42s51.76,111.9,51.76,249.94"></path>
                    </g>
                </svg>
            </a>
        </HeaderRightWrapper>
    );
};

export default HeaderRight;
