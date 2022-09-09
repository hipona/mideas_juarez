import React, { useEffect } from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import AppRouter from './components/Routes/AppRouter';
import CartContext from './context/CartContext';
import { StoreProvider } from './context/Store';


function App() {
 
  return (
    
    <MDBContainer fluid>
      <CartContext>
         <AppRouter/>
      </CartContext>
    </MDBContainer>
    
  );
}

export default App;
