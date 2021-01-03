import styled from 'styled-components';
import Color from '../../Constants/Color';

const ResponseHeaderWrapper = styled.div`
    padding: 24px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    display: flex;
`;

const ResponseHeaderTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: ${Color.borderblack};
    line-height: 24px;
    letter-spacing: 0;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
`;

const ResponseButtonBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

const DotButton = styled.button`
    fill: ${Color.borderblack};
    outline: none;
    cursor: pointer;
    border: 0;
    margin: 0;
    background: 0;
`;

const CloseButton = styled.button`
    fill: ${Color.gray};
    position: relative;
    right: -7px;
    margin: 0;
    padding: 0;
    background: 0;
    cursor: pointer;
    border: 0;
    height: 25px;
`;

const ResponseHeader = ({ ResponseNum }) => {
    var ResponseText = '';
    if (ResponseNum == 0) {
        ResponseText = 'Responses';
    } else {
        ResponseText = 'Responses (' + ResponseNum + ')';
    }
    return (
        <ResponseHeaderWrapper>
            <ResponseHeaderTitle>{ResponseText}</ResponseHeaderTitle>
            <ResponseButtonBlock>
                <DotButton>
                    <svg class="overflow-dots-filled-25px_svg__svgIcon-use" width="25" height="25">
                        <path
                            d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                </DotButton>
                <CloseButton>
                    <svg width="25" height="25" viewBox="0 0 25 25" class="dw">
                        <path d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"></path>
                    </svg>
                </CloseButton>
            </ResponseButtonBlock>
        </ResponseHeaderWrapper>
    );
};

export default ResponseHeader;
