import React from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import AppRouter from './components/Routes/AppRouter';

function App() {

  return (
    <MDBContainer fluid>
      <AppRouter/>
    </MDBContainer>
  );
}

export default App;
