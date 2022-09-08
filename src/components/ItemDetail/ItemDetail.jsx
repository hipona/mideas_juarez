import React, { useContext, useState } from 'react'
import {MDBCard,MDBCardTitle,MDBCardText,MDBCardBody,MDBCardImage,MDBRow,MDBCol,MDBBtn,MDBIcon} from 'mdb-react-ui-kit';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import '../css/bootstrap-theme.css';

export const ItemDetail = ({item}) => {
  const {id, img, titulo, valor, cuotas, stock, descripcion, colores} = item;
  const [cantidad, setCounter] = useState('0')
  
  //const [selecColor, setNuevoColor] = useState('')
  
  const cartContext = useContext(CartContext)
  const { addToCart} = cartContext
 
  // function addToCart(cantidad, selecColor){
  // if(stock){
  //   console.log(`Agregar al carrito el item: ${id} 
  //   Agregar al carrito el Producto Nombre: ${titulo}
  //   Agregar al carrito el item: ${cantidad}
  //   Agregar al carrito el Valor: ${valor}
  //   Agregar al carrito el Stock: ${stock}
  //   Agregar al carrito el Descripcion: ${descripcion}
  //   Agregar al carrito el Color: ${selecColor}`)
  // }

  const addCart = (cantidad, selecColor) => {
    addToCart(item, cantidad, selecColor)
  }


  return (
    <MDBCard className='mt-3'>
      <MDBRow className='g-4'>
        <MDBCol md='7'>
          <MDBCardImage src={img} alt='...' fluid />
        </MDBCol>
        <MDBCol md='5'>
          <MDBCardBody>
            <MDBCardTitle>
            <label className='fs-2'>{titulo}</label><p className='fs-4'>{`$ ${valor}`}</p>
            <p className='fs-6'><label className='text-warning'><MDBIcon fab icon="cc-mastercard" /> {cuotas} cuotas sin interés de </label> {`$ ${parseFloat(valor / cuotas).toFixed(2)}`}</p>
            </MDBCardTitle>

              <ItemCount stock={stock} inicial={1} colores={colores} onAdd={addCart}/>
           
          </MDBCardBody>
          <MDBCardText className='p-3'>
                <label className='fs-5'>Descripción<br/></label>
                <label>{descripcion}</label>
            </MDBCardText>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  )
}
