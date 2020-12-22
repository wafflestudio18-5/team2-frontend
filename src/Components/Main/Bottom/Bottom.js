import styled from 'styled-components';
import Color from '../../../Constants/Color';

const BottomStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    border-top: 1px solid ${Color.lightGray};
    align-items: center;
    box-sizing: border-box;
    overflow: visible;
    @media (min-width: 1080px) {
        padding: 56px 64px 0px;
    }
    @media (max-width: 1079.98px) and (min-width: 728px) {
        padding: 56px 48px 0px;
    }
    @media (max-width: 727.98px) {
        padding: 56px 24px 0px;
    }
`;

const BottomWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    max-width: 1192px;
    padding: 0 -16px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: visible;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const BottomLeftStyle = styled.div`
    box-sizing: border-box;
    width: 62%;
    flex-basis: 62%;
    padding-right: 5%;
    margin-right: 0;
    @media (max-width: 900px) {
        background: blue;
        width: 100%;
        flex-basis: 100%;
        padding-right: 0%;
        order: 2;
    }
`;

const BottomRightStyle = styled.div`
    width: 38%;
    flex-basis: 38%;
    box-sizing: border-box;
    padding-left: 5%;
    margin-left: 0;
    position: sticky;
    position: -webkit-sticky;
    align-self: flex-start;
    top: 107px;
    @media (max-width: 900px) {
        background: red;
        width: 100%; 
        flex-basis: 100%;
        padding-left: 0%;
        position: static;
        order: 1;
    }
`;

export {BottomStyle, BottomWrapper, BottomLeftStyle, BottomRightStyle};
