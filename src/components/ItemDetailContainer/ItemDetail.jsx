import React from 'react'
import {MDBCard,MDBCardTitle,MDBCardText,MDBCardBody,MDBCardImage,MDBRow,MDBCol} from 'mdb-react-ui-kit';
import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ({ item }) => {

  return (
    <MDBCard className='mt-3'>
      <MDBRow className='g-4'>
        <MDBCol md='7'>
          <MDBCardImage src={item.img} alt='...' fluid />
        </MDBCol>
        <MDBCol md='5'>
          <MDBCardBody>
            <MDBCardTitle>
                <label className='fs-2'>{item.titulo}</label>
                <p className='fs-4'>{item.valor}</p>
                <p className='fs-6'><label className='text-warning'>6 cuotas sin interés de </label> {item.cuotas}</p>
                <ItemCount stock={item.stock} inicial={1} onAdd='onAdd'/>
            </MDBCardTitle>
            <MDBCardText>
            <label className='fs-5'>Descripción<br/></label>
            <label>
            {item.descripcion}
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
