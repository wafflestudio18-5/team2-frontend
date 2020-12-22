import styled from 'styled-components';

const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 24px 0;
    flex-wrap: wrap;
    flex-direction: row;
    @media (max-width: 900px) {
        display: none;
    }
`;
export default FooterWrapper;
