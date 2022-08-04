import React from 'react';
import { MDBBtn, MDBContainer} from 'mdb-react-ui-kit';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <MDBContainer fluid>
      
      <NavBar/>
      
      <ItemListContainer/>
      
    </MDBContainer>
  );
}

export default App;
