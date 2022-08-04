import React from 'react';
import Card  from './Card/Card';
import Datos from './Card/datos.json';

export default function App() {
  
  /* const datos = [
   {
      img : 'https://d2r9epyceweg5n.cloudfront.net/stores/001/735/824/products/portaslentes_m11-bfe7c62442a944081216234202673185-1024-1024.jpg',
      titulo : 'Estuches de anteojos',
      valor: '$2200,00',
      cuotas: '6 cuotas sin interés de $366,67',
      btnText: 'Comprar',
      btnStyle : 'desiable'
   },
   {
      img : 'https://d2r9epyceweg5n.cloudfront.net/stores/001/735/824/products/ragnar11-bd123ba3cbd0b00d3d16234204218577-1024-1024.jpg',
      titulo : 'Billetera Doble - Ragnar',
      valor: '$2.500,00',
      cuotas: '6 cuotas sin interés de $416,67',
      btnText: 'Comprar',
      btnStyle : 'desiable'
   },
   {
      img : 'https://d2r9epyceweg5n.cloudfront.net/stores/001/735/824/products/billeteracompleta11-8e869ca23dc412eb5e16340058857031-1024-1024.jpg',
      titulo : 'Billetera Sobre',
      valor: '$3500,00',
      cuotas: '6 cuotas sin interés de $583,33',
      btnText: 'Comprar',
      btnStyle : 'desiable'
   }
  ] */

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