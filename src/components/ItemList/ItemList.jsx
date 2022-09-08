import React, { useState } from 'react';
import Item from '../Item/Item';
import {MDBCol} from 'mdb-react-ui-kit';

const ItemList = ( {productos} ) => {

    return (
            <>
            {productos.map((item)=>
                <MDBCol className='mt-5' md='4' key={item.id}>
                <Item 
                    titulo={item.titulo}
                    img={item.img}
                    valor={item.valor}
                    stock={item.stock}
                    id={item.id}
                    />
                </MDBCol>
            )}
            </>  
                   
            )
}

export default ItemList