import React from 'react'
import { Drawer } from 'antd';

const CartDrawer = ({open,setOpen}) => {

    const onClose = () => {
      setOpen(false);
    };
  return (
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
  )
}

export default CartDrawer