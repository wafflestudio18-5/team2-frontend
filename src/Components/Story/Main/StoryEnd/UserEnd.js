import styled from 'styled-components';
import Color from '../../../../Constants/Color';

const UserEndWrapper = styled.div`
    display: block;
    margin-top: 25px;
    padding-bottom: 25px;
`;

const UserEndBlock = styled.div`
    display: flex;
    margin-top: 25px;
    justify-content: space-between;
`;

const EndLeftBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

const Button = styled.button`
    cursor: pointer;
    border: 0;
    background: 0;
    fill: ${Color.borderBlack};
    margin: 0;
    padding-right: 8px;
`;

const ResponseWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ResponseNumber = styled.p`
    padding-left: 7px;
    top: 3px;
    padding-top: 5px;
    position: relative;
    display: block;
    color: ${Color.borderBlack};
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
`;
const EndRightBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

const EndButton = styled.button`
    margin-right: 6px;
    display: block;
    padding: 0;
    border: 0;
    background: 0;
    cursor: pointer;
`;

const UserEnd = ({ setOpen, ResponseNum, deleteStory, editStory, me, userinfo }) => {
    var endright;
    if (me.id !== userinfo.id) {
        endright = <div />;
    } else {
        endright = (
            <EndRightBlock>
                <EndButton onClick={editStory}>
                    <svg width="25" height="25">
                        <path
                            d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                </EndButton>
                <EndButton onClick={deleteStory}>
                    <svg width="25" height="25" viewBox="0 0 25 25" class="dw">
                        <path d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"></path>
                    </svg>
                </EndButton>
            </EndRightBlock>
        );
    }
    return (
        <UserEndWrapper>
            <UserEndBlock>
                <EndLeftBlock>
                    <Button onClick={() => setOpen(true)}>
                        <ResponseWrapper>
                            <svg width="33" height="33" viewBox="0 0 33 33" class="r" aria-label="responses">
                                <path
                                    d="M24.28 25.5l.32-.29c2.11-1.94 3.4-4.61 3.4-7.56C28 11.83 22.92 7 16.5 7S5 11.83 5 17.65s5.08 10.66 11.5 10.66c1.22 0 2.4-.18 3.5-.5l.5-.15.41.33a8.86 8.86 0 0 0 4.68 2.1 7.34 7.34 0 0 1-1.3-4.15v-.43zm1 .45c0 1.5.46 2.62 1.69 4.44.22.32.01.75-.38.75a9.69 9.69 0 0 1-6.31-2.37c-1.2.35-2.46.54-3.78.54C9.6 29.3 4 24.09 4 17.65 4 11.22 9.6 6 16.5 6S29 11.22 29 17.65c0 3.25-1.42 6.18-3.72 8.3z"
                                ></path>
                            </svg>
                            <ResponseNumber>{ResponseNum}</ResponseNumber>
                        </ResponseWrapper>
                    </Button>
                </EndLeftBlock>
                {endright}
            </UserEndBlock>
        </UserEndWrapper>
    );
};
export default UserEnd;
