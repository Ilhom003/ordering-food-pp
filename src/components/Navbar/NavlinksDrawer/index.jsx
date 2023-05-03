import React from 'react'
import { Drawer } from 'antd';
import { navbarData } from '../../../utils/navbar';
import { NavlinkDrawer, NavlinkDrawerWrapper } from '../style';

const NavlinksDrawer = ({ opening, setOpening }) => {

  const onClose = () => {
    setOpening(false);
  };
  return (
    <Drawer width={250} title="Basic Drawer" placement="right" onClose={onClose} open={opening}>
      <NavlinkDrawerWrapper>

        {
          navbarData.map(nav => !nav.hidden && (
            <NavlinkDrawer  style={({ isActive }) => ({ color: isActive ? 'var(--red)' : 'var(--blue)', fontWeight: isActive ? `800` : '500' })} key={nav.id} to={nav.path} >{nav.title}</NavlinkDrawer>
          ))
        }
      </NavlinkDrawerWrapper>
    </Drawer>
  )
}

export default NavlinksDrawer