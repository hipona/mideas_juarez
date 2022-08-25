import React from 'react'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBBtn,MDBCol, MDBCardFooter,MDBTypography} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
const Item = (props) => {
  const {id, img, titulo, valor, stock, cuotas, btnText, btnStyle} = props  
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
              <Link to={`/item/${id}`}>
                <MDBBtn>{btnText}</MDBBtn>
              </Link>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>  
  )
}

export default Item