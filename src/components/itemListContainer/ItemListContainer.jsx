import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBSpinner } from 'mdb-react-ui-kit';
import ItemList from '../ItemList/ItemList';

import db from '../../service';
import { collection, getDocs, getFirestore} from "firebase/firestore";

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
    
  useEffect(() => {
    const getProductosFirebase  = async () => {
      try{
        const itemCollection = collection(db, "productos");
        const col = await getDocs(itemCollection);
        const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data() })
        setProductos(res);
      } catch (error) {
        console.log(error)
      }
    }
       getProductosFirebase()
       return () => {
       }
  }, [])

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