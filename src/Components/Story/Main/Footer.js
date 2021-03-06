import styled from 'styled-components';
import Color from '../../../Constants/Color';

const FooterWrapper = styled.div`
    display: block;
    background-color: ${Color.Footerblack};
    padding: 32px 0;
`;

const FooterBlock = styled.div`
    display: flex;
    justify-content: center;
`;

const FooterContentWrapper = styled.div`
    display: block;
    min-width: 0;
    max-width: 1192px;
    width: 100%;
    height: 32px;
    margin: 0 64px;
    @media (max-width: 728px) {
        margin: 0 24px;
        display: flex;
        height: auto;
        flex-direction: column;
    }
    @media (max-width: 904px) and (min-width: 728px) {
        margin: 0 48px;
    }
`;

const FooterContentBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`;

const Logo = styled.a`
    fill: ${Color.white};
`;

const FooterLinkBlock = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
    padding-top: 8px;
`;

const FooterLink = styled.a`
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: ${Color.white};
    line-height: 24px;
    font-size: 16px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
`;

const MobileLetterBlock = styled.div`
    display: none;
    margin-top: 30px;
    margin-bottom: 16px;
    @media (max-width: 728px) {
        display: flex;
    }
`;

const MobileLetter = styled.h4`
    color: ${Color.mobilegray};
    line-height: 24px;
    font-size: 16px;
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0;
`;

const MobileLogoBlock = styled.div`
    display: none;
    flex-direction: row;
    width: 100%;
    margin-bottom: 16px;
    @media (max-width: 728px) {
        display: flex;
    }
`;

const MobileLogo = styled.a`
    display: block;
    margin-right: 16px;
    cursor: pointer;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterBlock>
                <FooterContentWrapper>
                    <FooterContentBlock>
                        <Logo href="/main">
                            <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 142.3 21.9" class="sc-bdfBwQ bVAyrF">
                                <path d="M97.8,3.3A2.1,2.1,0,0,1,100,1.1a2.2,2.2,0,0,1,2.1,2.3,2,2,0,0,1-2.2,2.1A2,2,0,0,1,97.8,3.3Z"></path>
                                <path d="M53,17.5l.9-3.3c.5-1.8,1.1-3.6,1.6-5.5a1.6,1.6,0,0,0,0-.7L54.3,3.6a19.2,19.2,0,0,0-1.2-2.5c-.2-.4-.2-.5.2-.5h7c.1.1-.1.2-.1.3l-1,1.5a1.1,1.1,0,0,0-.1,1c1,3.8,2.1,7.7,3.1,11.6.2.8.5,1.6.7,2.5a17.7,17.7,0,0,0,.6-1.7c.9-3.5,1.9-6.9,2.8-10.3a1.7,1.7,0,0,0-.1-1.2A39.6,39.6,0,0,1,64,1c0-.1-.2-.2-.1-.3s.2-.1.3-.1h5.3c.1,0,.2-.1.3.1s-.1.2-.1.3L67.6,4.1a8.5,8.5,0,0,0-1.1,2.6c-.6,2.5-1.3,4.9-2,7.4s-1.2,4.3-1.7,6.4c-.1.4-.2.5-.6.5H59.4c-.3,0-.4-.1-.5-.4L56.2,10.5c-.1-.3-.1-.8-.3-.8s-.3.5-.3.7c-1,3.4-2,6.8-2.9,10.2-.1.3-.2.4-.4.4h-3c-.2,0-.3-.1-.4-.3-1.3-4.9-2.7-9.8-4-14.6A17.7,17.7,0,0,0,42.8,1c0-.1-.1-.2-.1-.3h7.4c.1.1,0,.2-.1.3l-.9,1.5a.8.8,0,0,0-.1.8c.8,3.2,1.7,6.3,2.6,9.5.3,1.4.7,2.8,1.1,4.2A.5.5,0,0,0,53,17.5Z"></path>
                                <path d="M142.8,21h-7.1a1,1,0,0,1,.5-.6,3.1,3.1,0,0,0,1-2.6c-.1-1.8,0-3.6,0-5.4a6.4,6.4,0,0,0-.3-2,1.8,1.8,0,0,0-2.6-1.3l-.6.5a1,1,0,0,0-.4,1.2,4.9,4.9,0,0,1,.1,1.2c0,2.3,0,4.6-.1,6.9a1.1,1.1,0,0,0,.4.9l1.2,1.2h-7.2l.9-1.1a1.3,1.3,0,0,0,.5-1.2c0-1.7.1-3.5.1-5.2a13.7,13.7,0,0,0-.2-2.9c-.3-1-.8-1.6-1.6-1.7a2.4,2.4,0,0,0-2.1,1.3v8.6a1.3,1.3,0,0,0,.4,1,6.5,6.5,0,0,1,1.1,1.2h-7.1a3.3,3.3,0,0,1,.9-1.1,1.5,1.5,0,0,0,.6-1.3V9.4a2,2,0,0,0-.6-1.5l-.6-.7c-.1-.1-.3-.2-.2-.4h5.1c.3,0,.4.2.4.5V9.5c.9-1.9,2.2-3,4.1-3s3.1,1.2,3.7,3.3a11.4,11.4,0,0,1,.9-1.6,4.3,4.3,0,0,1,2.7-1.6,3.3,3.3,0,0,1,3,.7,4.7,4.7,0,0,1,1.4,2.8,22.6,22.6,0,0,1,.2,5.8V19a.6.6,0,0,0,.3.6Z"></path>
                                <path d="M103.9,6.8c.2-.2.4-.1.6-.1h4.7c.2,0,.3.1.3.4v8.3a8.3,8.3,0,0,0,.3,2.2,1.6,1.6,0,0,0,2.4,1,2.3,2.3,0,0,0,1-2c-.1-2.4,0-4.9,0-7.4a1.3,1.3,0,0,0-.5-1.2l-1-1.2h5.2c.3,0,.4.1.4.4V18.6a1.5,1.5,0,0,0,.4,1.1l.8.9c.1.1.2.1.2.3s-.2,0-.3,0h-4.8c-.3.1-.5,0-.4-.5V18.1l-.4.5c-1.1,2.4-3.7,3.3-5.5,2a4,4,0,0,1-1.7-2.9,14.3,14.3,0,0,1-.3-2.9c0-1.9,0-3.7.1-5.6a1.7,1.7,0,0,0-.5-1.3Z"></path>
                                <path d="M103.5,21H96.4a6.9,6.9,0,0,1,1.1-1.3c.3-.2.3-.5.3-.9V9.1A1.4,1.4,0,0,0,97.4,8l-1-1.1c.1-.2.2-.2.3-.2h4.9c.3,0,.4.1.4.5V18.7a1.3,1.3,0,0,0,.5,1.1Z"></path>
                                <path d="M94.1,9.6v9a1.4,1.4,0,0,0,.4,1.1,3.4,3.4,0,0,1,.8.9c.1,0,.2.2.2.2s-.2.1-.3.1H90.4c-.4.1-.5-.1-.5-.5a7.5,7.5,0,0,0,0-1.5c0-.1.1-.2,0-.3a.2.2,0,0,0-.2.2,4.6,4.6,0,0,1-1.9,2,4.5,4.5,0,0,1-5.5-1.7A9.3,9.3,0,0,1,81.1,15a11.6,11.6,0,0,1,.6-4.9c1.1-2.5,3.1-3.9,5.6-3.5a3,3,0,0,1,2.3,1.6c0,.1.1.3.3.2s0-.3,0-.4V3a1.5,1.5,0,0,0-.4-1.1L88.7,1q-.3-.3,0-.3L89.9.5,93.8,0c.3,0,.3.1.3.4ZM90,9.6a1.4,1.4,0,0,0-.5-1,2.1,2.1,0,0,0-2.7.2,4.6,4.6,0,0,0-1,1.8,12.9,12.9,0,0,0-.2,4.8,6.6,6.6,0,0,0,.7,2.5,1.9,1.9,0,0,0,3.3.4,1,1,0,0,0,.3-1V13.5C89.9,12.2,89.9,10.9,90,9.6Z"></path>
                                <path d="M74.7,18.6c-.3.5-.5,1-.8,1.4a3.6,3.6,0,0,1-5.2.1,4.3,4.3,0,0,1-.9-2.3A4.2,4.2,0,0,1,70.7,13a4.6,4.6,0,0,1,3.8.4q.3.2.3-.3a19.7,19.7,0,0,0-.1-4.2A2,2,0,0,0,72.9,7c-.3,0-.5.2-.7.5l-1.8,3.8-.2.3c-.2-.1-.2-.4-.3-.5L68.7,7.9c-.2-.3-.1-.3.1-.4a14.2,14.2,0,0,1,6.1-.9,3.9,3.9,0,0,1,3.9,3.8,15.4,15.4,0,0,1,.1,4.3c-.1,1.1-.1,2.2-.1,3.3s.4,1.2.9,1.1l.5-.4A2.4,2.4,0,0,1,78.6,21a3.1,3.1,0,0,1-2.5-.2A3.2,3.2,0,0,1,74.7,18.6Zm.1-3.5v-.9a.5.5,0,0,0-.3-.5,2.2,2.2,0,0,0-2,.6,3.9,3.9,0,0,0-.5,3.8,1.5,1.5,0,0,0,1.5,1,1.6,1.6,0,0,0,1.3-1.6V15.1Z"></path>
                                <path d="M11.2,21.9A10.8,10.8,0,0,1,11.2.4,10.6,10.6,0,0,1,21.8,11.2,10.6,10.6,0,0,1,11.2,21.9Z"></path>
                                <path d="M23.1,10.4A14.8,14.8,0,0,1,24.6,4c.8-1.5,1.9-3,3.8-2.9S31.5,2.5,32.2,4a16.8,16.8,0,0,1,0,14.2h0c-.9,1.5-1.9,2.9-3.8,2.9s-3-1.4-3.8-2.9S23.1,13.8,23.1,10.4Z"></path>
                                <path d="M38.7,10.8a27.5,27.5,0,0,1-.8,7.8c-.2.6-.3,1.5-1,1.5s-1-.9-1.1-1.5a31.8,31.8,0,0,1-.6-11.5A14.2,14.2,0,0,1,36,3c.2-.4.3-.8.8-.9s.7.5.9.9A27,27,0,0,1,38.7,10.8Z"></path>
                            </svg>
                        </Logo>
                        <FooterLinkBlock>
                            <FooterLink href="https://medium.com/about?autoplay=1&source=post_page-----a9e2b1986203--------------------------------">
                                About
                            </FooterLink>
                            <FooterLink href="https://help.medium.com/hc/en-us?source=post_page-----a9e2b1986203--------------------------------">
                                Help
                            </FooterLink>
                            <FooterLink href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=post_page-----a9e2b1986203--------------------------------">
                                Legal
                            </FooterLink>
                        </FooterLinkBlock>
                    </FooterContentBlock>
                    <MobileLetterBlock>
                        <MobileLetter>Get the Wadium app</MobileLetter>
                    </MobileLetterBlock>
                    <MobileLogoBlock>
                        <MobileLogo>
                            <img
                                alt="A button that says 'Download on the App Store', and if clicked it will lead you to the iOS App store"
                                class=""
                                src="https://miro.medium.com/max/270/1*Crl55Tm6yDNMoucPo1tvDg.png"
                                width="135"
                                height="41"
                            />
                        </MobileLogo>
                        <MobileLogo>
                            <img
                                alt="A button that says 'Get it on, Google Play', and if clicked it will lead you to the Google Play store"
                                class=""
                                src="https://miro.medium.com/max/270/1*W_RAPQ62h0em559zluJLdQ.png"
                                width="135"
                                height="41"
                            />
                        </MobileLogo>
                    </MobileLogoBlock>
                </FooterContentWrapper>
            </FooterBlock>
        </FooterWrapper>
    );
};

export default Footer;
