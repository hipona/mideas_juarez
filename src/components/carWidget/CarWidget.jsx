import React from 'react';
import { MDBBadge, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
    
      <a className='mx-3' href='#!'>
        <MDBIcon fas icon='shopping-cart fa-lg' size='lg' />
        <MDBBadge color='danger' notification pill>
          1
        </MDBBadge>
      </a>

    </>
  );
}