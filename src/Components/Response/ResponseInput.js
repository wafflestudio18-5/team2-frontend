import styled from 'styled-components';
import Color from '../../Constants/Color';

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
`

const ResponseInputText = styled.p`
    cursor: text;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
    font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: rgba(0,0,0,0.8);
    opacity: 0.333;
    user-select: none;
    font-style: normal;
    font-weight: normal;
`

const ResponseInput = () => {
    return (
        <ResponseInputWrapper>
            <ResponseInputBlock>
                <ResponseInputInnerBlock>
                    <ResponseInputWindow data-gramm="false" role="textbox" data-slate-editor="true" data-slate-node="value" contenteditable="true">
                        <ResponseInputText>What are your thoughts?</ResponseInputText>
                    </ResponseInputWindow>
                </ResponseInputInnerBlock>
            </ResponseInputBlock>
        </ResponseInputWrapper>
    );
};

export default ResponseInput;
