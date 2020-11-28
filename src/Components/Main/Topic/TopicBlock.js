import styled from 'styled-components';
import Color from '../../../Constants/Color';

const TopicBlockStyle = styled.a`
    display: inline-block;
    margin-bottom: 8px;
    margin-right: 8px;
    border-radius: 3px;
    padding: 6px 16px;
    border: 1px solid ${Color.lightGray};
    cursor: pointer;
    text-decoration: none;
`;

const TopicLetterStyle = styled.p`
    color: ${Color.gray};
    margin: 0;
    padding: 0;
    font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    line-height: 20px;
    font-size: 13px;
`;

const TopicBlock = ({ topic }) => {
    return (
        <TopicBlockStyle href="https://medium.com/topics">
            <TopicLetterStyle>{topic.Topic}</TopicLetterStyle>
        </TopicBlockStyle>
    );
};

export default TopicBlock;
