import styled from 'styled-components';
import Color from '../../../Constants/Color';

const ArticleBlockStyle = styled.div`
    margin-bottom: 48px;
    display: flex;
`;

const ArticleTextBlock = styled.div`
    margin-right: 20px;
    width: 100%;
`;

const ArticleBlockWriter = styled.div`
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 16px;
    color: ${Color.borderBlack};
    font-weight: 500;
`;

const ArticleBlockProfile = styled.img`
    border-radius: 4px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 8px;
    margin-top: 3px;
    object-fit: cover;
`;

const ArticleBlockTitle = styled.p`
    width: 100%;
    max-height: 56px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    line-height: 28px;
    font-size: 22px;
    letter-spacing: 0;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${Color.borderBlack};
`;

const ArticleBlockSubtitle = styled.p`
    width: 100%;
    max-height: 40px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    line-height: 20px;
    font-size: 16px;
    letter-spacing: 0;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${Color.gray};
    @media (max-width: 727px) {
        display: none;
    }
`;

const ArticleBottomBlock = styled.div`
    display: flex;
    margin: 0;
    padding-top: 4px;
    justify-content: space-between;
`;

const ArticleBlockDateAndTime = styled.p`
    font-size: 13px;
    color: ${Color.gray};
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.03em;
    margin: 0;
`;

const ArticleImageBlock = styled.img`
    width: 200px;
    height: 133px;
    role: presentation;
    vertical-align: middle;
    object-fit: cover;
`;
const ArticleBlock = ({ article }) => {
    return (
        <ArticleBlockStyle>
            <ArticleTextBlock>
                <ArticleBlockWriter>
                    <ArticleBlockProfile src={article.profileurl} />
                    {article.writer}
                </ArticleBlockWriter>
                <ArticleBlockTitle>{article.title}</ArticleBlockTitle>
                <ArticleBlockSubtitle>{article.subtitle}</ArticleBlockSubtitle>
                <ArticleBottomBlock>
                    <ArticleBlockDateAndTime>
                        {article.date}
                        &nbsp;&middot;&nbsp;
                        {article.time}
                        &nbsp;read
                    </ArticleBlockDateAndTime>
                    <svg height="25" width="25" viewBox="0 0 25 25">
                        <path
                            d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z"
                            fill-rule="evenodd"
                        />
                    </svg>
                </ArticleBottomBlock>
            </ArticleTextBlock>
            <ArticleImageBlock src={article.pictureurl} />
        </ArticleBlockStyle>
    );
};

export default ArticleBlock;
