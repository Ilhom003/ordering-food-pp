import styled from "styled-components";
import { RiSendPlaneLine } from 'react-icons/ri'
import { GrFacebookOption } from 'react-icons/gr'
import { TbBrandGithub } from 'react-icons/tb'
import { AiFillYoutube } from 'react-icons/ai'
import { TfiLinkedin } from 'react-icons/tfi'


export const Container = styled.div`
width: 100%;
padding-top: 50px;
padding-bottom: 30px;
background: #fde4e4;
`
export const Wrapper = styled.div`
max-width: 1550px;
width: 100%;
margin: auto;

`

export const Row = styled.div`
padding: 0 130px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding-bottom:50px ;
@media (max-width:1440px) {
    padding: 0 80px;
}
@media (max-width:1200px) {
    padding: 0 70px;
}
@media (max-width: 992px){
    padding: 0 60px;
    grid-template-columns: 1fr 1fr 1fr;
}
@media (max-width: 768px){
    padding: 0 40px;
    grid-template-columns: 1fr 1fr;
}
@media (max-width: 576px){
    padding: 0 30px;
    grid-template-columns: 1fr;
    }

`
export const Column = styled.div`
padding: .5rem;
width: 100%;

`

export const LogoWrapper = styled.div`
display: flex;
flex-direction: column;

`
export const Logo = styled.img`
width: 51px;
height: 51px;
border-bottom: 5px;

@media (max-width:992px) {
    width: 39.5px;
    height: 39.5px;
    }
`
export const LogoTitle = styled.h5`
 @media (max-width:992px) {
    font-size: .8rem;
    }
`
export const LogoDescription = styled.p`
font-size: .9rem;
color: #333;
line-height: 28px;
`

export const FooterTitle = styled.h5``
export const FooterItems = styled.ul``
export const FooterItem = styled.li`
padding: 0.5rem 0;
list-style-type: none;
`
export const SpanDescr = styled.span`
font-size: 1rem;
color: #212245;
font-family: var(--secondary-font-family);
`
export const FooterDescription = styled.p`
color: #212245;
margin-bottom: 1rem;
font-family: var(--main-font-family);
font-weight: lighter;
`
export const FooterInput = styled.div`
padding: 5px;
border: 1px solid #212245;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`
export const Input = styled.input`
padding: 1px 2px;
background: transparent;
border: none;
outline: none;
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
font-family: var(--main-font-family);
`
export const Span = styled.span`
background: #df2020;
padding: 8px 30px;
border-radius: 5px;
`
export const SendMessage = styled(RiSendPlaneLine)`
color: var(--white);
`
export const CopyRightText = styled.p`
font-size: .8rem;
color: #df2020;
`
export const FooterLinksText = styled.div`
`
export const FooterLinks = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
padding: 0 130px;
@media (max-width:1440px) {
        padding: 0 80px;
    }
    @media (max-width:1200px) {
        padding: 0 70px;
    }
    @media (max-width: 992px){
        padding: 0 60px;
    }
    @media (max-width: 768px){
        padding: 0 40px;
    }
    @media (max-width: 576px){
    padding: 0 30px;
    grid-template-columns: 1fr;
    }

`
export const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;

    @media (max-width: 576px){
    padding: 0 30px;
    grid-template-columns: 1fr;
    justify-content: flex-start;
    }
`
export const SocialLinksText = styled.p``

export const MediaWrapper = styled.span`
display: flex;
justify-content: center;
align-items: center;
padding: 5px;
background: #df2020;
color: #fff;
border-radius: 50%;
`
export const FacebookIcon = styled(GrFacebookOption)`
color: white;
`
export const GithubIcon = styled(TbBrandGithub)`
color: white;
`
export const YouTubeIcon = styled(AiFillYoutube)`
color: white;
`
export const LinkedInIcon = styled(TfiLinkedin)`
color: white;
`