import Normal from './ImageStyles/Normal';
import Large from './ImageStyles/Large';
import Largest from './ImageStyles/Largest';
import NormalWrapper from './ImageStyles/NormalWrapper';
import LargeWrapper from './ImageStyles/LargeWrapper';
import LargestWrapper from './ImageStyles/LargestWrapper';
import styled from 'styled-components';
import Color from '../../../../Constants/Color';
import StoryBlock from './StoryBlock';

const ImageStyle = ({ size, children }) => {
    switch (size) {
        case 'normal':
            return (
                <NormalWrapper>
                    <StoryBlock>
                        <Normal>{children}</Normal>
                    </StoryBlock>
                </NormalWrapper>
            );

        case 'large':
            return (
                <LargeWrapper>
                    <StoryBlock>
                        <Large>{children}</Large>
                    </StoryBlock>
                </LargeWrapper>
            );

        case 'largest':
            return (
                <LargestWrapper>
                    <StoryBlock>
                        <Largest>{children}</Largest>
                    </StoryBlock>
                </LargestWrapper>
            );

        default:
            break;
    }
};

const Img = styled.img`
    width: 100%;
    &:hover {
        cursor: zoom-in;
    }
`;

const Caption = styled.figcaption`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: ${Color.gray}
    letter-spacing: 0;
    width: 100%;
    margin-top: 10px;
    text-align: center;
    overflow-wrap: break-word;
    font-family: 'Noto Sans';
`;

const Image = ({ detail }) => {
    return (
        <ImageStyle size={detail.size}>
            <Img src={detail.imgsrc} />
            <Caption>{detail.content}</Caption>
        </ImageStyle>
    );
};

export default Image;
