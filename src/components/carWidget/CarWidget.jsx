import React from 'react';
import { MDBBadge, MDBIcon, MDBNavbarLink } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBNavbarLink className='mt-4'>
        <MDBIcon fas icon='shopping-cart fa-lg text-light' size='lg' />
        <MDBBadge color='danger' notification pill>
          1
        </MDBBadge>
        </MDBNavbarLink>
    </>
  );
}