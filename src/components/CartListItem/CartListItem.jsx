import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { MDBContainer,MDBRow,MDBCol,MDBIcon} from 'mdb-react-ui-kit';
const CartListItem = () => {
  const cartContext = useContext(CartContext);
  const { cart, deleteCartPorId } = cartContext;
  return (
    <>
      {cart ? (
        cart.map((producto) => {
          return (
            <CartItem
              key={producto.id}
              item={producto}
              deleteCartPorId={deleteCartPorId}
            />
          );
        })
      ) : (
        <p>cargando productos</p>
      )}
      {cart.length ? (
        <></>
      ) : (
        <>
        <MDBContainer className='text-center'>
        <MDBRow>
         <MDBCol size='md'>
          <MDBIcon fas icon="cart-arrow-down" size='3x'/>
          <p className="text-danger">No hay productos en el carrito</p>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        </>
      )}
    </>
  );
};

export default CartListItem