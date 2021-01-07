import styled, { css } from 'styled-components';
import Color from '../../Constants/Color';
import TextareaAutosize from 'react-autosize-textarea';
import default_profile_image from '../../Images/default_profile_image.png';

const ResponseInputWrapper = styled.div`
    margin-bottom: 20px;
    padding: 20px 24px 0;
    display: block;
`;

const ResponseInputBlock = styled.div`
    padding-bottom: 0px;
    padding-top: 0px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px;
    flex-direction: column;
    background-color: white;
    display: flex;
`;

const ResponseInputInnerBlock = styled.div`
    display: block;
    min-height: 15px;
    padding: 14px;
`;

const ResponseInputWindow = styled.div`
    outline: none;
    white-space: pre-wrap;
    overflow-wrap: break-word;
`;

const ResponseInputText = styled.p`
    cursor: text;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
    font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgba(0, 0, 0, 0.8);
    opacity: 0.333;
    user-select: none;
    font-style: normal;
    font-weight: normal;
`;

const ResponseInputBlockClicked = styled.div`
    padding-bottom: 14px;
    transition: padding-top 400ms ease 0s, padding-bottom 400ms ease 0s;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px;
    background-color: white;
    padding-top: 14px;
    flex-direction: column;
    display: flex;
    border-radius: 4px;
`;

const ResponseInputWriterBlock = styled.div`
    margin-bottom: 6px;
    transition: opacity 400ms ease 0s, max-height 400ms ease 0s, margin-bottom 400ms ease 0s;
    padding: 0px 14px;
    justify-content: space-between;
    position: relative;
    align-items: center;
    display: flex;
    ${props =>
        !props.logged_in &&
        css`
            display: none;
        `}
`;

const ResponseInputWriterInfo = styled.div`
    align-items: center;
    display: flex;
`;

const ResponseInputWriterNameBlock = styled.div`
    margin-left: 12px;
    align-items: flex-start;
    justify-content: center;
    display: flex;
`;

const ResponseInputWriterName = styled.h4`
    color: ${Color.borderBlack};
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
`;

const ResponseInputInnerBlockClicked = styled.div`
    flex-direction: column;
    display: flex;
`;

const ResponseInputterWrapper = styled.div`
    min-height: 100px;
    transition: min-height 400ms ease 0s;
`;

const ResponseInputterBlock = styled.div`
    padding: 14px;
    display: block;
`;

const ResponseInputter = styled(TextareaAutosize)`
    ::placeholder {
        color: ${Color.borderBlack};
        opacity: 0.333;
    }
    all: unset;
    resize: vertical;
    overflow: visible;
    width: 100%;
    outline: none;
    white-space: pre-wrap;
    overflow-wrap: break-word;
`;

const ResponseButtonBlock = styled.div`
    max-height: 100px;
    transition: opacity 400ms ease 0s, max-height 400ms ease 0s;
    align-self: flex-end;
    padding: 0px 14px;
    display: flex;
`;

const CancelButton = styled.button`
    cursor: pointer;
    border: none;
    padding: 4px 12px 6px;
    color: ${Color.borderBlack};
    text-decoration: none;
    display: inline-block;
    border-radius: 4px;
    background: 0;
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
`;

const RespondButton = styled.button`
    cursor: pointer;
    background: rgb(26, 137, 23);
    color: rgb(255, 255, 255);
    padding: 4px 12px 6px;
    text-decoration: none;
    display: inline-block;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    border-color: rgba(26, 137, 23, 1);
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
`;

const ResponseInput = ({ logged_in, responseInput, setResponseInput, me, InputValue, setInputValue, postResponse }) => {
    if (!responseInput || !logged_in) {
        return (
            <ResponseInputWrapper>
                <ResponseInputBlock>
                    <ResponseInputInnerBlock
                        onClick={() =>
                            setResponseInput(() => {
                                if (logged_in) return true;
                                else return false;
                            })
                        }
                    >
                        <ResponseInputWindow
                            data-gramm="false"
                            role="textbox"
                            data-slate-editor="true"
                            data-slate-node="value"
                            contenteditable="true"
                        >
                            <ResponseInputText>What are your thoughts?</ResponseInputText>
                        </ResponseInputWindow>
                    </ResponseInputInnerBlock>
                </ResponseInputBlock>
            </ResponseInputWrapper>
        );
    } else {
        const onChange = e => {
            const value = e.target.value;
            setInputValue(value);
        };

        const onReset = () => {
            setInputValue('');
            setResponseInput(false);
        };
        const SubmitRespond = () => {
            postResponse(InputValue);
            setInputValue('');
            setResponseInput(false);
        };
        var profile;
        if (me.profile_image === '') profile = default_profile_image;
        else profile = me.profile_image;
        return (
            <ResponseInputWrapper>
                <ResponseInputBlockClicked>
                    <ResponseInputWriterBlock logged_in={logged_in}>
                        <ResponseInputWriterInfo>
                            <img src={profile} width="32" height="32" />
                            <ResponseInputWriterNameBlock>
                                <ResponseInputWriterName>{me.name}</ResponseInputWriterName>
                            </ResponseInputWriterNameBlock>
                        </ResponseInputWriterInfo>
                    </ResponseInputWriterBlock>
                    <ResponseInputInnerBlockClicked>
                        <ResponseInputterWrapper>
                            <ResponseInputterBlock>
                                <ResponseInputter
                                    type="text"
                                    placeholder="What are your thoughts?"
                                    value={InputValue}
                                    onChange={onChange}
                                />
                            </ResponseInputterBlock>
                        </ResponseInputterWrapper>
                    </ResponseInputInnerBlockClicked>
                    <ResponseButtonBlock>
                        <CancelButton onClick={onReset}>Cancel</CancelButton>
                        <RespondButton onClick={SubmitRespond}>Respond</RespondButton>
                    </ResponseButtonBlock>
                </ResponseInputBlockClicked>
            </ResponseInputWrapper>
        );
    }
};

export default ResponseInput;
