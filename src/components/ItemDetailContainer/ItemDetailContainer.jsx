import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import listaDeProductos from '../Data/datos.json'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {MDBSpinner } from 'mdb-react-ui-kit';

const ItemDetailContainer = () => {
  
  const {id} = useParams();

  const [item, setItem] = useState({});
  
  // Promesa
  const getProductos = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(listaDeProductos.find((element) => element.id ==id));
    }, 2000);
  }) 

  //Async mock 
  const getDetalleProductiId = async () => {
    try {
      const result = await getProductos;
      setItem(result);
    } catch (error) {
      console.log(error);
      alert('No se puede mostrar el Item!');
    }
  };
    
  useEffect(() => {
    getDetalleProductiId()
  }, [id]); 


  return (
    <>
      {Object.keys(item).length ? (
        <ItemDetail item={item} />
      ):(
        <div className="d-flex align-items-center justify-content-center">
          <MDBSpinner role="status">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer