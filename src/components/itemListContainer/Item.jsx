import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBCol, 
    MDBCardFooter,
    MDBTypography
  } from 'mdb-react-ui-kit';
const Item = (props) => {
  const {img, titulo, valor, stock, cuotas, btnText, btnStyle} = props  
  return (
    <MDBCol className='me-5 text-center'>
        <MDBCard>
            <MDBCardImage className='img-thumbnail' src={img} position='top' alt='...'/>
            <MDBCardBody>
              <MDBCardTitle>{titulo}</MDBCardTitle>
              <MDBCardText>
                <MDBTypography tag='small' className='text-muted '>
                  Stock disponible<label className='px-2'><strong>{stock}</strong></label>
                </MDBTypography>
              </MDBCardText>
              <MDBBtn>{btnText}</MDBBtn>

            </MDBCardBody>
        </MDBCard>
    </MDBCol>  
  )
}

export default Item