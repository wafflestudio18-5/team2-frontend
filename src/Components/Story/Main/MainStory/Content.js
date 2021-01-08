import Paragraph from './Paragraph';
import Image from './Image';
import MainBlock from './MainBlock';
import StoryBlock from './StoryBlock';
import styled from 'styled-components';

const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Content = ({ section, marginzero=false }) => {
    let contents = [];
    var isimage = false;
    section.forEach(content => {
        if (content.type === 'paragraph') {
            contents.push(
                <StoryBlock>
                    <Paragraph content={content.detail.content} emphasizing={content.detail.emphasizing} />
                </StoryBlock>
            );
        }
        if (content.type === 'image') {
            //image가 들어있는 section에는 paragraph없이 image 하나만으로 구성 부탁드립니다.
            isimage = true;
            contents.push(<Image detail={content.detail} />);
        }
    });
    /*if (isimage) {
        return (
            <MainWrapper>{contents}</MainWrapper>
        );
    } else {
        return (
            <MainWrapper>
                <MainBlock>{contents}</MainBlock>
            </MainWrapper>
        );
    }*/
    return (
        <MainWrapper>
            <MainBlock marginzero={marginzero}>{contents}</MainBlock>
        </MainWrapper>
    );
};

export default Content;
