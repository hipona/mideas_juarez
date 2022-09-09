import React, { useContext } from 'react'
import {MDBCard,MDBCardBody,MDBIcon,MDBCardHeader,MDBCardFooter,MDBContainer,MDBRow,MDBCol,MDBBtn} from 'mdb-react-ui-kit';
import CartListItem from '../CartListItem/CartListItem';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Calc from '../Calc/Calc';
const Cart = () => {

  const cartContext = useContext(CartContext);
  const {cart, deleteCart } = cartContext;

  const delToCardHandle = () => {
    deleteCart()
  }

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
                {cart.length === 0 ? <></>
                : <MDBBtn color='link' onClick={delToCardHandle}><MDBIcon fas icon="trash-alt"/> Vaciar el carrito</MDBBtn>
                }
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