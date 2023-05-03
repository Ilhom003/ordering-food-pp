import React from 'react'
import { Column, Container, CopyRightText, FacebookIcon, FooterDescription, FooterInput, FooterItem, FooterItems, FooterLinks, FooterLinksText, FooterTitle, GithubIcon, Input, LinkedInIcon, Logo, LogoDescription, LogoTitle, LogoWrapper , MediaWrapper, Row, SendMessage, SocialLinks, SocialLinksText, Span, SpanDescr, Wrapper, YouTubeIcon } from './style'
import logo from '../../assets/logo.jpg'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column>
            <LogoWrapper>
              <Logo src={logo} alt='logo' />
              <LogoTitle>Tasty Treat</LogoTitle>
            </LogoWrapper>
            <LogoDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus
            </LogoDescription>
          </Column>
          <Column>
            <FooterTitle>Delivery Time</FooterTitle>
            <FooterItems>
              <FooterItem>
                <SpanDescr>Sunday - Thursday</SpanDescr>
                <FooterDescription>10:00am - 11:00pm</FooterDescription>
              </FooterItem>
            </FooterItems>
            <FooterItems>
              <FooterItem>
                <SpanDescr>Friday - Saturday</SpanDescr>
                <FooterDescription>Off day</FooterDescription>
              </FooterItem>
            </FooterItems>
          </Column>
          <Column>
            <FooterTitle>Contact</FooterTitle>
            <FooterItems>
              <FooterItem>
                <FooterDescription>Location: ZindaBazar, Sylhet-3100, Bangladesh</FooterDescription>
              </FooterItem>
            </FooterItems>
            <FooterItems>
              <FooterItem>
                <SpanDescr>Phone: 01712345678</SpanDescr>
              </FooterItem>
              <FooterItem>
                <SpanDescr>Email: example@gmail.com</SpanDescr>
              </FooterItem>
            </FooterItems>
          </Column>
          <Column>
            <FooterTitle>Newsletter</FooterTitle>
            <FooterItems>
              <FooterItem>
                <FooterDescription>Subscribe our newsletter</FooterDescription>
              </FooterItem>
            </FooterItems>
            <FooterInput>
              <Input type="text" placeholder='Enter your email' />
              <Span>
                <SendMessage />
              </Span>
            </FooterInput>
          </Column>
        </Row>
        <FooterLinks>
          <FooterLinksText>
            <CopyRightText>Copyright - 2022, website made by Muhibur Rahman. All Rights Reserved.</CopyRightText>
          </FooterLinksText>
          <Column>
            <SocialLinks>
              <SocialLinksText>Follow:</SocialLinksText>
              <MediaWrapper>
                <FacebookIcon />
              </MediaWrapper>
              <MediaWrapper>
                <GithubIcon />
              </MediaWrapper>
              <MediaWrapper>
                <YouTubeIcon />
              </MediaWrapper>
              <MediaWrapper>
                <LinkedInIcon />
              </MediaWrapper>
            </SocialLinks>
          </Column>
        </FooterLinks>
      </Wrapper>
    </Container>
  )
}

export default Footer