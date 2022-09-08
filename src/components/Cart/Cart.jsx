import React from 'react'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardHeader,MDBCardFooter,MDBContainer,MDBRow,MDBCol,MDBBtn} from 'mdb-react-ui-kit';
import CartListItem from '../CartListItem/CartListItem';
import {Link} from 'react-router-dom';
const Cart = () => {
  return (
    <MDBContainer className='my-5'>
      <MDBRow>
        <MDBCol size='8'>
          <MDBCard>
            <MDBCardHeader>MI CARRITO</MDBCardHeader>
            <MDBCardBody>
              <CartListItem/>
            </MDBCardBody>
            <MDBCardFooter className='text-muted text-center'>
            <Link to='/productos'><MDBBtn color='link'>Agregar más productos</MDBBtn></Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol size='4'>
          <MDBCard>
            <MDBCardBody>
              Subtotal
              <hr className='my-2'></hr>
              TOTAL
            </MDBCardBody>
          </MDBCard>
          <MDBCard className='my-2'>
            <MDBCardBody>Cupón de descuento</MDBCardBody>
          </MDBCard>
          <MDBBtn
            className='my-2'
            rounded
            color='dark'
            style={{ width: "100%", height: "50px" }}
          >
            Finalizar la compra
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Cart