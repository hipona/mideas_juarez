import React, { useContext } from 'react'
import { MDBBadge, MDBIcon, MDBNavbarLink, MDBNavbarItem } from 'mdb-react-ui-kit';
import { CartContext } from '../../context/CartContext';

export const CarWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;
  
  return (
    <>
      <MDBNavbarLink className="mt-4">
        <MDBIcon fas icon="shopping-cart fa-lg text-light mt-3" size="lg" />
        <MDBBadge color="danger fs-6 mx-0" notification pill >
          {cart.map((item) => item.cant).reduce((ant, act) => ant + act, 0)}
        </MDBBadge>
      </MDBNavbarLink>
    



    </>
  );
}
export default CarWidget