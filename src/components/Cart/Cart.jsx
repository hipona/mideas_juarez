import React, { useContext } from 'react'
import {MDBCard,MDBCardBody,MDBIcon,MDBCardHeader,MDBCardFooter,MDBContainer,MDBRow,MDBCol,MDBBtn} from 'mdb-react-ui-kit';
import CartListItem from '../CartListItem/CartListItem';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import Formulario from '../Formulario/Formulario';
const Cart = () => {

  const cartContext = useContext(CartContext);
  const {cart, deleteCart } = cartContext;

  const totalItems = () =>{
      let totalItems = cart.map(item => (item.cant)).reduce((ant,act)=>ant+act,0);
      return totalItems
    }

    const total = () =>{
      let totalCompra = cart.map(item => (item.cant * item.valor)).reduce((ant,act)=>ant+act,0);
      return totalCompra
    }

  const delToCardHandle = () => {
    deleteCart()
  }

  return (
    <MDBContainer className='my-5'>
      <MDBRow>
        <MDBCol sm='8'>
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
        <MDBCol sm='4'>
          <Formulario total={totalItems()}  compra={total()}/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Cart