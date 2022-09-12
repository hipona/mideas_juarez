import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);  
    const [total, setTotal] = useState(0);

    const addToCart = (item, cant, selecColor) => {
        if(cart.some(p => p.id === item.id)){
            let index = cart.find(p => p.id === item.id);
            let producto = cart[index];
            producto.cant = producto.cant + cant;
            
            const newCart = [...cart];
            newCart.splice( index, 1, producto);
            
            setCart([ ...newCart ]);

        }else{
            let producto = {...item, cant, selecColor};
            setCart([...cart, producto ]);
        }
    }

    const deleteCartPorId = ( id ) => {
        const newCart = [...cart];
        let index = newCart.find(p => p.id === id);
        
        newCart.splice( index, 1 );

        setCart([...newCart]);
    }

    const deleteCart = () => {
        setCart([]);
    }

  return (
    <CartContext.Provider 
            value={{ 
                        cart, 
                        setCart,
                        addToCart,
                        deleteCartPorId,
                        deleteCart, 
                   }}
        >
            {props.children}
        </CartContext.Provider>
  )
}

export default CartProvider