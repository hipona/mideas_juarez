import React from 'react'
import { MDBCol} from 'mdb-react-ui-kit';
import ItemCount from '../ItemCount/ItemCount';
//import Card  from './Card/Card';
//import Datos from './Card/datos.json';

export default function App() {

  const onAdd = (cantidad) => {
    alert(`Se agregó ${cantidad} producto`);
  }

  return (
   <MDBCol md='3' className='mt-5 text-center'>

      <ItemCount stock={5} onAdd={onAdd} inicial={1}/>  
 
   </MDBCol>
  )
}