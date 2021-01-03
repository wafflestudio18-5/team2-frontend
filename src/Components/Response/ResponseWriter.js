import styled from 'styled-components';
import Color from '../../Constants/Color';

const ResponseWriterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ResponeWriterInformationBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const WriterImage = styled.img`
    border-radius: 50%;
    vertical-align: middle;
    height: 32px;
    width: 32px;
`;

const WriterInformationBlock = styled.div`
    padding-left: 12px;
    display: block;
`;

const WriterNameBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

const WriterName = styled.a`
    margin: 0;
    padding: 0;
    color: ${Color.borderBlack};
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    text-decoration: none;
`;

const ResponseTime = styled.h4`
    color: ${Color.gray};
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
`;

const DotButton = styled.button`
    cursor: pointer;
    border: 0;
    background: 0;
    fill: rgba(61, 61, 61, 1);
    margin: 0;
`;

const ResponseWriter = ({ Response }) => {
    const Writer = Response.writer;
    var isedited = Response.created_at === Response.updated_at ? '' : '(edited)';
    return (
        <ResponseWriterWrapper>
            <ResponeWriterInformationBlock>
                <WriterImage src={Writer.profile_image} />
                <WriterInformationBlock>
                    <WriterNameBlock>
                        <WriterName href={'/user/' + Writer.id}>{Writer.name}</WriterName>
                        <ResponseTime>
                            about {Response.time} ago {isedited}
                        </ResponseTime>
                    </WriterNameBlock>
                </WriterInformationBlock>
            </ResponeWriterInformationBlock>
            <DotButton>
                <svg class="overflow-dots-filled-25px_svg__svgIcon-use" width="25" height="25">
                    <path
                        d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                        fill-rule="evenodd"
                    ></path>
                </svg>
            </DotButton>
        </ResponseWriterWrapper>
    );
};

export default ResponseWriter;
