import React from 'react'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardHeader,MDBCardFooter,MDBContainer,MDBRow,MDBCol,MDBBtn} from 'mdb-react-ui-kit';
import CartListItem from '../CartListItem/CartListItem';
import {Link} from 'react-router-dom';
import Calc from '../Calc/Calc';
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
          <Calc/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Cart