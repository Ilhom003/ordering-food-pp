import React, { useState } from 'react'
import { Basket, Container, Icons, Logo, LogoTitle, LogoWrapper, NavItem, NavItems, User, Wrapper,MenuBar } from './style'
import logo from '../../assets/logo.jpg'
import { navbarData } from '../../utils/navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import CartDrawer from './CartDrawer'
import NavlinksDrawer from './NavlinksDrawer'

const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          <LogoWrapper onClick={()=> navigate('/home')}>
            <Logo  src={logo} />
            <LogoTitle>Tasty Treat</LogoTitle>
          </LogoWrapper>
          <nav>
            <NavItems>
              {
                navbarData.map(nav => !nav.hidden && (
                  <NavItem  key={nav.id} to={nav.path} >{nav.title}</NavItem>
                ))
              }
            </NavItems>
          </nav>
          <Icons>
            <Basket onClick={() => setOpen(prev => !prev)} />
            <User onClick={() => navigate('/login')} />
            <MenuBar  onClick={() => setOpening(prev => !prev)} />
          </Icons>
        </Wrapper>
      </Container>
      <Outlet />
      <CartDrawer open={open} setOpen={setOpen} />
      <NavlinksDrawer opening={opening} setOpening={setOpening} /> 
    </>
  )
}

export default Navbar