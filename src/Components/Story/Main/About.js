import styled from 'styled-components';
import Color from '../../../Constants/Color';

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    transition: opacity 200ms;
    opacity: 1;
    will-change: opacity;
    top: 85.6px;
    position: fixed;
    width: 100%;
`

const AboutBlock = styled.div`
    display: block;
    margin: 0 64px;
    min-width: 0;
    max-width: 1192px;
    width: 100%;
`

const AboutInnerBlock = styled.div`
    display: flex;
    width: 131px;
    flex-direction: column;
`

const WriterInfoBlock = styled.div`
    display: block;
    padding-bottom: 28px;
    border-bottom: 1px solid ${Color.lightGray};
`

const WrittenBy = styled.p`
    text-transform: uppercase;
    letter-spacing: 0.083em;
    line-height: 16px;
    font-size: 12px;
    color: ${Color.gray};
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
`

const UserNameBlock = styled.div`
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
`

const UserName = styled.a`
    font-weight: 500;
    Color: ${Color.black};
    font-size: 16px;
    word-break: break-word;
    letter-spacing: 0;
    line-height: 20px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-decoration: none;
    cursor: pointer;
`

const UserInfoBlock = styled.div`
    display: block;
    padding-top: 2px;
`

const UserInfo = styled.p`
    color: ${Color.gray};
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
`

const FollowBlock = styled.div`
    display: block;
    padding-top: 14px;
`

const FollowButton = styled.button`
    display: inline-block;
    padding: 4px 12px 6px;
    border-color: ${Color.gray};
    color: ${Color.black};
    text-decoration: none;
    border-width: 1px;
    border-radius: 4px;
    background: 0;
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    cursor: pointer;
`

const About = () => {
    return(
        <AboutWrapper>
            <AboutBlock>
                <AboutInnerBlock>
                    <WriterInfoBlock>
                        <WrittenBy>written by</WrittenBy>
                        <UserNameBlock>
                            <UserName href="https://medium.com/@unintelligents">
                                Unintelligents
                            </UserName>
                        </UserNameBlock>
                        <UserInfoBlock>
                            <UserInfo>
                                Teach News
                            </UserInfo>
                        </UserInfoBlock>
                        <FollowBlock>
                            <FollowButton>Follow</FollowButton>
                        </FollowBlock>
                    </WriterInfoBlock>
                </AboutInnerBlock>
            </AboutBlock>
        </AboutWrapper>
    )
}

export default About