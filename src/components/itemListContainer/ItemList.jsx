import React, { useEffect, useState } from 'react';
import listaDeProductos from '../Data/datos.json'
import Item from './Item'
import {MDBCol, MDBSpinner } from 'mdb-react-ui-kit';

const ItemList = () => {

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
                productos.length ? ( 
                    <>
                    {
                        productos.map((props) => {
                            return (
                            <MDBCol className='mt-5' md='4' key={props.id}>
                                <Item 
                                titulo={props.titulo}
                                img={props.img}
                                valor={props.valor}
                                stock={props.stock}
                                btnText={props.btnText}
                                id={props.id}
                                />
                                </MDBCol>
                            );
                        })
                    }
                    </>
                ) : (
                    <div className='d-flex align-items-center justify-content-center'>
                        <MDBSpinner role='status'>
                            <span className='visually-hidden'>Loading...</span>
                        </MDBSpinner>
                    </div>
                )
            )
}

export default ItemList