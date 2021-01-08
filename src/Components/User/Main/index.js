import styled from 'styled-components'
import About from './About'

const MainWrapper = styled.div`
display: flex;
box-sizing: border-box;
justify-content: center;
width: 100%;
word-break: break-word;
flex-direction: column;
`;


const Main = ({ reachScrollCheckPoint, userinfo }) => {
    return (
        <MainWrapper>
            <About reachScrollCheckPoint={reachScrollCheckPoint} userinfo={userinfo} />
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
            <p>Main</p>
        </MainWrapper>
    );
};

export default Main;