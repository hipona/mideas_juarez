import React, { useEffect } from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import axios from 'axios';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <MDBContainer fluid>
      
      <NavBar/>
      
      {/* Nota Pasando Id= 1, 2, 3, 4 trae el detalle de cada uno de los productos*/}
      <ItemDetailContainer id={4}/>

    </MDBContainer>
  );
}

export default App;
