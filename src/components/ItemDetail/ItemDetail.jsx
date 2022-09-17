import React, { useContext} from 'react'
import {MDBCard,MDBCardTitle,MDBCardText,MDBCardBody,MDBCardImage,MDBRow,MDBCol,MDBIcon} from 'mdb-react-ui-kit';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import '../css/bootstrap-theme.css';
import swal from 'sweetalert';

export const ItemDetail = ({item}) => {
  const {id, img, titulo, valor, cuotas, stock, descripcion, colores} = item;
  
  const cartContext = useContext(CartContext)
  const { addToCart } = cartContext
 // const navigate = useNavigate()
  
  const onAddCart = (cantidad, selecColor) => {
    if(selecColor === 'Elija un color'){
      return swal({
        title: "Error!",
        text: "Seleccione un color",
        icon: "error",
      })
      return;
    }
    addToCart(item, cantidad, selecColor)
  }

  // const onAddShop = (cantidad, selecColor) => {
  //   if(selecColor === 'Elija un color'){
  //     return swal({
  //       title: "Error!",
  //       text: "Seleccione un color",
  //       icon: "error",
  //     })
  //     return;
  //   }
  //   navigate('/Cart')
  //   addToCart(item, cantidad, selecColor)
  // }

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
              <ItemCount stock={stock} inicial={1} colores={colores} onAddCart={onAddCart} />
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
