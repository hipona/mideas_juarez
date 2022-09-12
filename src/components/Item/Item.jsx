import React from 'react'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBBtn,MDBCol,MDBTypography,MDBIcon} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
const Item = (props) => {
  const {id, img, titulo, valor, stock, cuotas} = props  
  return (
    <MDBCol className='me-3 text-center'>
        <MDBCard>
            <MDBCardImage className='img-thumbnail' src={img} position='top' alt='...'/>
            <MDBCardBody>
              <MDBCardTitle>{titulo}</MDBCardTitle>
              <MDBCardText>
                <MDBTypography tag='small' className='text-muted '>
                  Stock disponible<label className='px-2'><strong>{stock}</strong></label>
                </MDBTypography>
                <p className='fs-4 fw-bold text-center'>${valor}</p>
              </MDBCardText>
              <p className='fs-6'><label className='text-warning'><MDBIcon fab icon="cc-mastercard" /> {cuotas} cuotas sin interés de </label> {`$ ${parseFloat(valor / cuotas).toFixed(2)}`}</p>
            </MDBCardBody>
        </MDBCard>
        <Link to={`/item/${id}`}>
            <MDBBtn rounded color='dark' className='mx-2' style={{ top: "-240px"}}><MDBIcon className='px-2 fs-6' fas icon="cart-arrow-down" /></MDBBtn>
        </Link>
    </MDBCol>  
  )
}

export default Item