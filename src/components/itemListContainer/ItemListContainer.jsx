import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBSpinner } from 'mdb-react-ui-kit';
import listaDeProductos from '../Data/datos.json';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
    
  // Promesa
  const getProductos = new Promise((resolve, rejected) => {
      setTimeout(() => {
          resolve(listaDeProductos);
      }, 2000);
  })
  
  //Async mock 
  const getProductosDataBase = async () => {
      try {
        const result = await getProductos;
        setProductos(result);
      } catch (error) {
        console.log(error);
        alert('No se puede mostrar los Productos!');
      }
  };

  useEffect(() => {
      getProductosDataBase();
  }, []);

  return (
    <MDBContainer>
      <MDBRow>
        {productos.length ? 
          <ItemList productos={productos} />
         : 
            <div className='d-flex align-items-center justify-content-center'>
                <MDBSpinner role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
         }  
      </MDBRow>
    </MDBContainer>
  )
}

export default ItemListContainer