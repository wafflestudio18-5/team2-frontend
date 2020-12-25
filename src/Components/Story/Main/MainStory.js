import styled from 'styled-components';
import Color from '../../../Constants/Color';

const MainWrapper = styled.div`
    display: block;
    margin: 0 64px;
    max-width: 680px;
    min-width: 0;
    width: 100%;
    word-break: break-word;
`;

const Title = styled.div`
    letter-spacing: -0.011em;
    line-height: 56px;
    margin-top: 0.6em;
    font-size: 46px;
    margin-bottom: -0.27em;
    font-style: normal;
    font-weight: 700;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
`
const WriterWrapper = styled.div`
    margin-top: 32px;
    display: block;
`
const WriterBlock = styled.div`
    justify-content: space-between;
    display: flex;
    word-break: break;
`
const WriterLeft = styled.div`
    align-items: center;
    display: flex;
`
const WriterPicture = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: block;
    vertical-align: middle;
`

const MainStory = () => {
    return (
    <MainWrapper>
        <Title>
        I created my own YouTube algorithm to stop me wasting time.
        </Title>
        <WriterWrapper>
            <WriterBlock>
                <WriterLeft>
                    <a href="https://medium.com/@unintelligents">
                        <WriterPicture src="https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png" />
                    </a>
                </WriterLeft>
            </WriterBlock>
        </WriterWrapper>
    </MainWrapper>
    );
};

export default MainStory;
