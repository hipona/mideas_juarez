import React, { useContext, useEffect, useState } from 'react'
import { MDBBadge, MDBIcon, MDBNavbarLink } from 'mdb-react-ui-kit';
import { CartContext } from '../../context/CartContext';

export const CarWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;
  
  return (
    <>
      <MDBNavbarLink className='mt-4'>
        <MDBIcon fas icon='shopping-cart fa-lg text-light' size='lg' />
        <MDBBadge color='danger' notification pill>
          {cart.map(item => (item.cant)).reduce((ant,act)=>ant+act,0)}
        </MDBBadge>
        </MDBNavbarLink>
    </>
  )
}
export default CarWidget