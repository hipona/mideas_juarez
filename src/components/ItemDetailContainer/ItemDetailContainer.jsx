import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {MDBSpinner } from 'mdb-react-ui-kit';

import db from '../../service';
import { collection, getDocs, query} from "firebase/firestore";

const ItemDetailContainer = () => {
  
  const {id} = useParams();

  const [itemId, setItem] = useState({});
 
  useEffect(() => {
    const getProductosId  = async () => {
      try{
        const itemCollection = collection(db, "productos");
        const col = await getDocs(itemCollection);
        const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data() })

        setItem(res.find((element) => element.id == id));
        
      } catch (error) {
        console.log(error)
      }
    }
      getProductosId()
       return () => {
       }
  }, [id])

  return (
    <>
      {Object.keys(itemId).length ? (
        <ItemDetail item={itemId} />
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