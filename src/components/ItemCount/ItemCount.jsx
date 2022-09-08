import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import {MDBCard,MDBRow,MDBIcon,MDBBtn,MDBCol, MDBTypography,MDBContainer} from 'mdb-react-ui-kit';

const ItemCount = ({stock, inicial, colores, onAdd}) => {
  const [cantidad, setProducto] = useState(inicial)
  
  const [selecColor, setSelectColor] = useState('')

  const cartContext = useContext(CartContext);
  const { cart, item } = cartContext;

  return (
    
    <MDBCard className='text-center p-3'>
    <MDBContainer className='mb-4'>
      <MDBRow>
        <MDBCol order='first'>
            <select onChange= { e => setSelectColor(e.target.value)} value={selecColor} className='form-select form-select-sm'>
                  {colores.map((colores)=> <option key={colores} value={colores} >{colores}</option>)}
            </select>
        </MDBCol>
        <MDBCol order='last'>
              <MDBRow>
                <MDBCol size='md'>
                  <MDBBtn color='dark' floating onClick={() => setProducto(cantidad-1)} disabled={cantidad <= inicial ? true : null}><MDBIcon fas icon='minus' /></MDBBtn>
                </MDBCol>
                <MDBCol size='md'>
                  <MDBTypography tag='h5'>{cantidad}</MDBTypography>
                </MDBCol>
                <MDBCol size='md'>
                  <MDBBtn color='dark' floating onClick={() => setProducto(cantidad+1)} disabled={cantidad >= stock ? true : null}><MDBIcon fas icon='plus'/></MDBBtn>
                </MDBCol>
              </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <MDBRow>
      <MDBCol md='6'>
            <Link to='/Cart'><MDBBtn  rounded color='dark' onClick={() => onAdd(cantidad, selecColor)} disabled={stock === 0 ? true : null} style={{width: '180px'}}>Comprar</MDBBtn></Link>   
      </MDBCol>
      <MDBCol md='6'>
            <MDBBtn  rounded outline color='dark' onClick={() => onAdd(cantidad, selecColor)} disabled={stock === 0 ? true : null} >Agregar al carrito</MDBBtn>
      </MDBCol>
    </MDBRow>       
  </MDBCard>
  )
}

export default ItemCount;