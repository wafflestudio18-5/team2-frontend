import styled from 'styled-components';
import Color from '../../../../Constants/Color';

const TagWrapper = styled.div`
    padding-bottom: 48px;
    margin-top: 25px;
    display: block;
`

const TagBlock = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-image: none;
`

const TagStyle = styled.li`
    display: inline-block;
    margin-bottom: 8px;
    list-style-type: none;
    margin-right: 8px;
`

const TagA = styled.a`
    display: block;
    padding: 5px 10px;
    border-radius: 3px;
    line-height: 22px;
    font-size: 13px;
    background: ${Color.backgroundGray};
    text-decoration: none;
    color: ${Color.gray};
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
`

const Tag = ({tag}) => {
    let tags = []
    tag.forEach((Tag) => {
        tags.push(
            <TagStyle>
                <TagA href={Tag.url}>{Tag.name}</TagA>
            </TagStyle>
        )
    })
    return(
        <TagWrapper>
        <TagBlock>
            {tags}
        </TagBlock>
    </TagWrapper>
    );
}

export default Tag;