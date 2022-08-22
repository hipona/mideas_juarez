import React, { useEffect, useState } from 'react'
import detalleDeProductos from '../Data/datos.json'
import { ItemDetail } from './ItemDetail';
import {MDBSpinner } from 'mdb-react-ui-kit';

const ItemDetailContainer = ({ id }) => {

  const [detalle, setDetalle] = useState(null);

  const getById = (id, array) => array.find((e) => e.id === id);

  // Promesa
  const getDetalle = new Promise((resolve, rejected) => {
      setTimeout(() => {
          resolve(detalleDeProductos);
      }, 2000);
  })
  
  //Async mock
  const getDetalleProductiId = async (id, setDetalle) => {
    try {
      const result = await getDetalle;
      setDetalle(getById(id, result));
    } catch (error) {
      console.log(error);
    }
  };
    
  useEffect(() => {
      getDetalleProductiId(id, setDetalle);
     console.log(detalle);
  }, []);  

  return (
    
          <>
            {

            detalle ? (<ItemDetail item={detalle} /> ) : (
              <div className='d-flex align-items-center justify-content-center'>
                  <MDBSpinner role='status'>
                      <span className='visually-hidden'>Loading...</span>
                  </MDBSpinner>
              </div>
            )
            
            }
          </>

        )
}

export default ItemDetailContainer