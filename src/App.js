import React, { useEffect, useState } from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import axios from 'axios';

function App() {
 
 
  
  return (
    <MDBContainer fluid>
      
      <NavBar/>
      
      <ItemListContainer/>

    </MDBContainer>
  );
}

export default App;
