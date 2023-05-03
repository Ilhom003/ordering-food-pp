import styled from "styled-components";
import { NavLink } from "react-router-dom"
import { RiShoppingBasketLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';


export const Container = styled.div`
    width: 100%;

    `
export const Wrapper = styled.div`
    max-width: 1550px;
    width: 100%;
    margin: auto;
    padding: 0 130px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
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
    }
    
    `
export const LogoWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Logo = styled.img`
width: 51px;
height: 51px;

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
export const NavItems = styled.ul`
    display: flex;
    gap: 3rem;

    @media (max-width:992px) {
    display: none;
    }
`
export const NavItem = styled(NavLink)`
font-weight: 600;
font-size: 1rem;
font-family: var(--main-font-family);
text-decoration: none;
`

export const Icons = styled.div`
display: flex;
gap: 1.5rem;
`
export const Basket = styled(RiShoppingBasketLine)`
width: 21px;
height: 21px;

@media (max-width:992px) {
    width: 16px;
    height: 16px;
 }
`
export const User = styled(BiUser)`
width: 21px;
height: 21px;
@media (max-width:992px) {
    width: 16px;
    height: 16px;
 }
`
export const MenuBar = styled(FiMenu)`
display: none;
width: 16px;
height: 16px;
 @media (max-width:992px) {
    display: block;
 }
`
export const NavlinkDrawerWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`
export const NavlinkDrawer = styled.p`
    font-weight: 600;
    font-size: 1rem;
    color: var(--blue);
`
