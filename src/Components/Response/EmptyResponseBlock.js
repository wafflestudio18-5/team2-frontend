import styled from 'styled-components';
import Color from '../../Constants/Color';

const EmptyResponseWrapper = styled.div`
    display: flex;
    height: 80vh;
    font-weight: 200;
    text-align: center;
    font-style: italic;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const EmptyResponseLetter = styled.h4`
    line-height: 24px;
    font-size: 16px;
    color: ${Color.gray};
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
`;

const EmptyResponseBlock = () => {
    return (
        <EmptyResponseWrapper>
            <EmptyResponseLetter>There are currently no responses for this story.</EmptyResponseLetter>
            <EmptyResponseLetter>Be the first to respond.</EmptyResponseLetter>
        </EmptyResponseWrapper>
    );
};

export default EmptyResponseBlock;
