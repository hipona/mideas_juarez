import React from 'react'
import { MDBContainer, MDBRow,MDBCol,MDBBtn,MDBIcon} from 'mdb-react-ui-kit';

const CartItem = ({item, deleteCartPorId}) => {
 const {id, img, titulo, valor, cuotas, selecColor, cant} = item;   
  return (
          <>
          <MDBContainer className='text-center'>
          <MDBRow>
            <MDBCol sm='2'>
            <img
                src={img}
                style={{ width: '75px'}}
              />
            </MDBCol>
            <MDBCol sm='4'>
            <p className='fw-bold mb-1'>{titulo}</p>
            <p className='text-muted mb-0'>{`$ ${valor} x 1 un.`}</p>
            <p className='text-muted mb-0'>{selecColor}</p>
            </MDBCol>
            <MDBCol sm='1'>
               {cant}
            </MDBCol>
            <MDBCol sm='4'>
            <label className='fs-4'> ${item.cant * item.valor}</label>
            </MDBCol>
            <MDBCol sm='1'>
            <MDBBtn color='link' rounded size='sm'>
               <MDBIcon className='text-danger' fas icon="trash-alt" onClick={()=>deleteCartPorId(item.id)}/>
            </MDBBtn>
            </MDBCol>
          </MDBRow>
          </MDBContainer>
          </>
  )
}

export default CartItem