import React from 'react'
import { MDBContainer, MDBRow,MDBCol,MDBBtn,MDBIcon} from 'mdb-react-ui-kit';

const ItemOrder = ({item}) => {
  const {id, img, titulo, valor, cuotas, selecColor, cant} = item;   
  return (
          <>
          <MDBRow>
            <MDBCol sm='3'>
            <img
                src={img}
                style={{ width: '45px'}}
              />
            </MDBCol>
            <MDBCol sm='7'>
            <p className='fw-bold text mb-0'><h6>{titulo}</h6></p>
            <p className='text-muted mb-0'>{`$ ${valor} x 1 un.`}</p>
            <p className='text-muted mb-0'>{selecColor}</p>
            </MDBCol>
            <MDBCol sm='1'>
               {cant}
            </MDBCol>
          </MDBRow>
          </>
  )
}

export default ItemOrder