import React from 'react'
import {MDBCard,MDBCardTitle,MDBCardText,MDBCardBody,MDBCardImage,MDBRow,MDBCol} from 'mdb-react-ui-kit';
import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ({ item }) => {
  const {id, img, titulo, valor, cuotas, stock, descripcion} = item;
  return (
    <MDBCard className='mt-3'>
      <MDBRow className='g-4'>
        <MDBCol md='7'>
          <MDBCardImage src={img} alt='...' fluid />
        </MDBCol>
        <MDBCol md='5'>
          <MDBCardBody>
            <MDBCardTitle>
                <label className='fs-2'>{titulo}</label>
                <p className='fs-4'>{valor}</p>
                <p className='fs-6'><label className='text-warning'>6 cuotas sin interés de </label> {cuotas}</p>
                <ItemCount stock={stock} inicial={1} onAdd='onAdd'/>
            </MDBCardTitle>
            <MDBCardText>
            <label className='fs-5'>Descripción<br/></label>
            <label>
            {descripcion}
            </label>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Comentarios</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  )
}
