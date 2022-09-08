import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const CartListItem = () => {

  const cartContext = useContext(CartContext);
  const { cart, deleteCartPorId, deleteCart } = cartContext;
  return (
    <>
    {cart ? (cart.map( producto => {
        return( <CartItem key={producto.id} 
                          item={producto} 
                          deleteCartPorId={deleteCartPorId} 
                /> );
        }))
        :<p>cargando productos</p>
    }
    {cart.length ? <></>
     : <label className='text-danger'>No hay productos en el carrito</label>
    }
    </>
  )
};

export default CartListItem