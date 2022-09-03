import React, { useContext, useState } from 'react'
import {MDBCard,MDBCardTitle,MDBCardText,MDBCardBody,MDBCardImage,MDBRow,MDBCol,MDBBtn} from 'mdb-react-ui-kit';
import ItemCount from '../ItemCount/ItemCount';
import '../css/bootstrap-theme.css';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {
  const {id, img, titulo, valor, cuotas, stock, descripcion, colores} = item;
  const [cantidad, setCounter] = useState('0')
  const [setColor, setSelectColor] = useState(['Marron'])

  //const cartContext = useContext(CartContext);
  //const { addToCart } = cartContext;
  
  function addToCart(cantidad){
  if(stock){
    console.log(`Agregar al carrito el item: ${id} 
    Agregar al carrito el Producto Nombre: ${titulo}
    Agregar al carrito el item: ${cantidad} ´
    Agregar al carrito el Valor: ${valor}
    Agregar al carrito el Stock: ${stock}
    Agregar al carrito el Descripcion: ${descripcion}
    Agregar al carrito el Color: ${setColor}`)
  }
  setCounter(cantidad)
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
              <label className='fs-2'>{titulo}</label><p className='fs-4'>{valor}</p>
              <p className='fs-6'><label className='text-warning'>6 cuotas sin interés de </label> {cuotas}</p>
            </MDBCardTitle>
            {
            cantidad !== '0' ?
            <div><p className='fs-6'><label className='text-primary'>Color: </label> {setColor}</p><p className='fs-6'><label className='text-primary'>Cantidad: </label> {cantidad}</p></div> :
            
            <select onChange= {(e) => {setSelectColor(e.target.value)}} value={setColor}  className='form-select form-select-sm'>
                  {colores.map((colores)=> <option value={colores} key={colores}>{colores}</option>)}
            </select>

            }

            {cantidad !== '0'? 
              <Link to="/Cart"><MDBBtn color='success'>Finalizar Compra</MDBBtn></Link> :
              <ItemCount stock={stock} inicial={1} onAdd={addToCart}/>
            }

            <MDBCardText>
                <label className='fs-5'>Descripción<br/></label>
                <label>{descripcion}</label>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  )
}
