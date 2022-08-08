import React from 'react'
import { MDBCol} from 'mdb-react-ui-kit';

export default function App(props) {
  const {greeting} = props;
  return (
   <MDBCol md='12' className='bg-primary mt-5 text-white text-center'>
      <div>{greeting}</div>
   </MDBCol>
  )
}