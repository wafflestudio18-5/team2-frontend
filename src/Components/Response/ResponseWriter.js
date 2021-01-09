import styled, { css } from 'styled-components';
import Color from '../../Constants/Color';
import default_profile_image from '../../Images/default_profile_image.png'
import changeDate from '../../Pages/Main/Functions/changeDate'

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

const ButtonWrapper = styled.div``;

const Button = styled.button`
    cursor: pointer;
    border: 0;
    background: 0;
    fill: rgba(61, 61, 61, 1);
    margin: 0;
    ${props =>
        !props.idcmp &&
        css`
            display: none;
        `}
`;

const ResponseWriter = ({ Response, me, deleteResponse }) => {
    const Writer = Response.writer;
    var isedited = ''
    var profileimg
    if(Writer.profile_image === "")
        profileimg = default_profile_image
    else
        profileimg = Writer.profile_image
    return (
        <ResponseWriterWrapper>
            <ResponeWriterInformationBlock>
                <WriterImage src={profileimg} />
                <WriterInformationBlock>
                    <WriterNameBlock>
                        <WriterName href={'/user/' + Writer.id}>{Writer.name}</WriterName>
                        <ResponseTime>
                            {changeDate(Response.updated_at+'')} {isedited}
                        </ResponseTime>
                    </WriterNameBlock>
                </WriterInformationBlock>
            </ResponeWriterInformationBlock>
            <ButtonWrapper>
                <Button idcmp={Writer.id === me.id} onClick = {() => deleteResponse(Response.id)}>
                    <svg width="25" height="25" viewBox="0 0 25 25" class="dw">
                        <path d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"></path>
                    </svg>
                </Button>
            </ButtonWrapper>
        </ResponseWriterWrapper>
    );
};

export default ResponseWriter;
