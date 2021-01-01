import styled from 'styled-components';
import Color from '../../../Constants/Color';

const HeaderLeftWrapper = styled.div`
    display: flex;
    width: 100%;
    padding-top: 8px;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
`;

const HeaderLeftBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-top: -32px;
    margin-bottom: 0px;
    flex-direction: row;
    width: 100%;
`;
const UserNameBlock = styled.div`
    margin-right: 24px;
    margin-top: 32px;
    margin-bottom: -6px;
    display: block;
    box-sizing: inherit;
`;

const UserName = styled.a`
    word-break: break-word;
    color: ${Color.letterBlack} !important;
    background-color: white;
    line-height: 34px;
    font-size: 27px;
    letter-spacing: 0;
    font-weight: 700;
    text-decoration: none;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    cursor: pointer;
`;

const UserInfoWrapper = styled.div`
    margin-top: 36px;
    display: block;
`;

const UserInfoBlock = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: -10px;
    margin-top: -6px;
`;

const About = styled.a`
    margin-left: 12px;
    line-height: 24px;
    font-size: 16px;
    color: ${Color.gray};
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    text-decoration: none;
    margin: 0;
`;

const FollowBlock = styled.div`
    margin-left: 24px;
    display: block;
    margin-bottom: -5px;
`;

const FollowButton = styled.button`
    padding: 7px 16px 9px;
    border-width: 1px;
    border-radius: 4px;
    text-decoration: none;
    background: 0;
    border-color: ${Color.gray};
    color: ${Color.borderBlack};
    border-style: solid;
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    cursor: pointer;
`;

const HeaderLeft = () => {
    return (
        <HeaderLeftWrapper>
            <HeaderLeftBox>
                <UserNameBlock>
                    <UserName href="https://medium.com/@username">UserName</UserName>
                </UserNameBlock>
                <UserInfoWrapper>
                    <UserInfoBlock>
                        <About href="https://medium.com/@username/about">About</About>
                        <FollowBlock>
                            <FollowButton>Follow</FollowButton>
                        </FollowBlock>
                    </UserInfoBlock>
                </UserInfoWrapper>
            </HeaderLeftBox>
        </HeaderLeftWrapper>
    );
};

export default HeaderLeft;