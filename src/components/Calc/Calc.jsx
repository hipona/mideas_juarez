import React, { useContext, useEffect, useState }  from 'react'
import {MDBCard,MDBCardBody,MDBBtn,MDBCol,MDBIcon} from 'mdb-react-ui-kit';
import { CartContext } from '../../context/CartContext';

const Calc = () => {
    const cartContext = useContext(CartContext);
    const { cart, getCartTotal } = cartContext;  

  return (
    <>
      <MDBCard>
        <MDBCardBody>
          <div className="d-flex">
            <MDBCol>Cantiadad en <MDBIcon fas icon="cart-arrow-down" /></MDBCol>
            <MDBCol className="text-center fw-bold">{cart?.length}</MDBCol>
          </div>
          <hr className="my-2"></hr>
          <div className="d-flex">
            <MDBCol className="fs-4 fw-bold">TOTAL</MDBCol>
            <MDBCol className="fs-4 fw-bold text-center">
              {getCartTotal(cart)}
            </MDBCol>
          </div>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="my-2">
        <MDBCardBody>Cupón de descuento</MDBCardBody>
      </MDBCard>
      <MDBBtn
        className="my-2"
        rounded
        color="dark"
        style={{ width: "100%", height: "50px" }}
      >
        Finalizar la compra
      </MDBBtn>
    </>
  );
}

export default Calc