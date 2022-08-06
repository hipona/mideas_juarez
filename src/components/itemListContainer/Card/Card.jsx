import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCol, 
  MDBTypography
} from 'mdb-react-ui-kit';
const Card = (props) => {
  const {img, titulo, valor, cuotas, btnText, btnStyle} = props
  console.log(props)
  return (
    <MDBCol className='me-5'>
        <MDBCard>
            <MDBCardImage className='img-thumbnail' src={img} position='top' alt='...'/>
            <MDBCardBody>
              <MDBCardTitle>{titulo}</MDBCardTitle>
              <MDBCardText>
                <MDBTypography tag='h5'>
                  {valor} 
                </MDBTypography>
                <MDBTypography tag='small' className='text-muted'>
                  {cuotas}
                </MDBTypography>
              </MDBCardText>
              <MDBBtn href='#' className={btnStyle}>{btnText}</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>  
  )
}
export default Card