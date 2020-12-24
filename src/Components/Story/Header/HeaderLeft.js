import styled from 'styled-components';
import Color from '../../../Constants/Color';

const HeaderLeftWrapper = styled.div`
    display: flex;
    width: 100%;
    padding-top: 8px;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-start;
`;

const HeaderLeftBox = styled.div`
    flex-wrap: wrap;
    align-items: flex-end;
    margin-top: -32px;
    margin-bottom: 0px;
    flex-direction: row;
    width: 100%;
    display: flex;
`
const UserNameBlock = styled.div`
    margin-right: 24px;
    margin-top: 32px;
    display: block;
    box-sizing: inherit;
`

const UserName = styled.a`
    word-break: break-word;
    color: ${Color.letterBlack} !important;
    background-color: white;
    line-height: 34px;
    font-size: 27px;
    letter-spacing: 0;
    font-weight: 700;
    text-decoration: none;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    cursor: pointer;
`

const HeaderLeft = () => {
    return (
        <HeaderLeftWrapper>
            <HeaderLeftBox>
                <UserNameBlock>
                    <UserName href="https://medium.com/@unintelligents"> UserName </ UserName>
                </UserNameBlock>
            </HeaderLeftBox>
        </HeaderLeftWrapper>
    )
};

export default HeaderLeft;
