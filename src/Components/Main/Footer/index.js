import FooterWrapper from "./FooterWrapper"
import FooterBlock from "./FooterBlock"

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterBlock href="https://help.medium.com/hc/en-us?source=home-------------------------------------">Help</FooterBlock>
            <FooterBlock href="https://medium.statuspage.io/?source=home-------------------------------------">Status</FooterBlock>
            <FooterBlock href="https://about.medium.com/creators/?source=home-------------------------------------">Writers</FooterBlock>
            <FooterBlock href="https://blog.medium.com/?source=home-------------------------------------">Blog</FooterBlock>
            <FooterBlock href="https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e?source=home-------------------------------------">Careers</FooterBlock>
            <FooterBlock href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9?source=home-------------------------------------">Privacy</FooterBlock>
            <FooterBlock href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=home-------------------------------------">Terms</FooterBlock>
            <FooterBlock href="https://medium.com/about?autoplay=1&source=home-------------------------------------">About</FooterBlock>
        </FooterWrapper>
    )
}

export default Footer