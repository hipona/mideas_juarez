import React, { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRow,
    MDBIcon,
    MDBBtn,
    MDBCol, 
    MDBCardHeader,
    MDBCardFooter,
    MDBTypography
  } from 'mdb-react-ui-kit';

const ItemCount = ({stock, inicial, onAdd}) => {
  
  const [cantidad, setProducto] = useState(inicial)

  return (
    <MDBCard>
    <MDBCardBody>
    <MDBCardHeader>Contador</MDBCardHeader>
      <MDBCardTitle></MDBCardTitle>
        <MDBRow>
          <MDBCol size='md'>
          <MDBBtn color='link' onClick={() => setProducto(cantidad-1)}
             disabled={cantidad <= inicial ? true : null}
          >
            <MDBIcon fas icon="minus" />
          </MDBBtn>
          </MDBCol>
          <MDBCol size='md'>
            <MDBTypography tag='h5'>{cantidad}</MDBTypography>
          </MDBCol>
          <MDBCol size='md'>
            <MDBBtn color='link'onClick={() => setProducto(cantidad+1)}
                disabled={cantidad >= stock ? true : null}
            >
              <MDBIcon fas icon="plus"/>
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      <MDBCardFooter className='text-muted'>
        <MDBBtn className='mt-4' 
          onClick={() => onAdd(cantidad)} disabled={stock === 0 ? true : null}
        >Agregar al carrito</MDBBtn>
      </MDBCardFooter>
    </MDBCardBody>
  </MDBCard>
  )
}

export default ItemCount;