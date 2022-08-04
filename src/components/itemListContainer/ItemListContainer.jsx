import React from 'react';
import Card  from './Card/Card';
import Datos from './Card/datos.json';

export default function App() {
  
  

  return (
    <>
      <div className="d-flex p-5 text-center" style={{ height: "100px" }}>
         {Datos.map((item, index) => (
             <Card {... item} />
         ))}
      </div>
    </>
  );
}