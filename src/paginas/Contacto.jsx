import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBInput,
  MDBTextArea,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
const Contacto = () => {
  return (
    <MDBCard>
      <MDBCardBody className="text-center">
        <MDBCardTitle>
          <h3>CONTACTO</h3>
        </MDBCardTitle>
        <p>Marcelo E Juarez</p>
        <p>
          <MDBIcon fab icon="whatsapp" /> 5491159142129
        </p>
        <p>
          <MDBIcon fas icon="phone" /> 5491159142129
        </p>
        <p>
          <MDBIcon far icon="envelope" /> ventas@mideas.ar
        </p>
        <MDBContainer>
        <MDBRow>
        <MDBCol size='md'>
         
        </MDBCol>
        <MDBCol size='md'>
        <MDBCardText>
            <MDBInput label="Nombre" type="text" className='mb-4'/>

            <MDBInput label="Email" type="text" className='mb-4'/>

            <MDBInput label="Teléfono" type="text" className='mb-4'/>

            <MDBTextArea label="Mensaje" rows={4} className='mb-4'/>
          
            <MDBBtn rounded color="dark">
              enviar
            </MDBBtn>
          </MDBCardText>
        </MDBCol>
        <MDBCol size='md'>
          
        </MDBCol>
         
        </MDBRow>
        </MDBContainer>
        
      </MDBCardBody>
    </MDBCard>
  );
}

export default Contacto