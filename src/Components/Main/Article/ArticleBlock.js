import styled from 'styled-components';
import Color from '../../../Constants/Color';
import changeDate from "../../../Pages/Main/Functions/changeDate"

const ArticleBlockStyle = styled.div`
    margin-bottom: 48px;
    display: flex;
`;

const ArticleTextBlock = styled.div`
    margin-right: 20px;
    width: 100%;
`;

const ArticleBlockWriter = styled.div`
    cursor: pointer;
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 16px;
    color: ${Color.borderBlack};
    font-weight: 500;
    text-decoration: none;
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
    cursor: pointer;
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
    text-decoration: none;
    color: ${Color.borderBlack};
`;

const ArticleBlockSubtitle = styled.p`
    width: 100%;
    cursor: pointer;
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
    text-decoration: none;
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
    cursor: pointer;
    width: 200px;
    height: 133px;
    vertical-align: middle;
    object-fit: cover;
    @media (max-width: 900px) and (min-width: 728px) {
        width: 172px;
        height: 129px;
    }
    @media (max-width: 727px) {
        width: 150px;
        height: 113px;
    }
`;
const ArticleBlock = ({ article, history }) => {
    return (
        <ArticleBlockStyle>
            <ArticleTextBlock>
                <ArticleBlockWriter onClick={()=>history.push("/user/"+article.writer.id)} >
                    <ArticleBlockProfile src={article.writer.profile_image} />
                    {article.writer.name}
                </ArticleBlockWriter>
                <ArticleBlockTitle onClick={()=>{history.push("/story/"+article.id)}} >{article.title}</ArticleBlockTitle>
                <ArticleBlockSubtitle onClick={()=>{history.push("/story/"+article.id)}} >{article.subtitle}</ArticleBlockSubtitle>
                <ArticleBottomBlock>
                    <ArticleBlockDateAndTime>
                        {changeDate(article.published_at)}
                    </ArticleBlockDateAndTime>
                    <svg height="25" width="25" viewBox="0 0 25 25">
                        <path d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z" />
                    </svg>
                </ArticleBottomBlock>
            </ArticleTextBlock>
            <ArticleImageBlock src={article.featured_image} onClick={()=>{history.push("/story/"+article.id)}}/>
        </ArticleBlockStyle>
    );
};

export default ArticleBlock;
