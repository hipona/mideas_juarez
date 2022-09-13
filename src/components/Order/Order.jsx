import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { MDBCardHeader,MDBCard,MDBContainer,MDBRow,MDBCardBody,MDBBtn,MDBCol,MDBSpinner,MDBCardFooter} from 'mdb-react-ui-kit';

import db from '../../service';
import { collection, getDocs, query} from "firebase/firestore";
import ItemOrder from '../ItemOrder/ItemOrder';

const Order = () => {
  
  const {id} = useParams();
  
  const [itemId, setItem] = useState({});
 
  useEffect(() => {
    const getProductosId  = async () => {
      try{
        const itemCollection = collection(db, "ordenes");
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
        <MDBContainer className="my-5">
        <MDBRow>
          <MDBCol sm="7">
            <MDBCard>
              <MDBCardHeader>MI OREN DE COMPRA <label className="fs-6 fw-bold">{id}</label></MDBCardHeader>
              <MDBCardBody>
                <MDBContainer className="text-center">
                  <label>{itemId.buyer.nombre} - {itemId.buyer.apellido}</label>
                  <p>{itemId.buyer.email}</p>
                  <p>{itemId.buyer.telefono}</p>
                  <p>¿CÓMO QUERÉS OBTENER TU PEDIDO?</p>
                </MDBContainer>
              </MDBCardBody>
              <MDBCardFooter className="text-muted text-center"></MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol sm="5">
            <MDBCard>
              <MDBCardHeader className="fs-6 fw-bold">Resumen</MDBCardHeader>
              <MDBCardBody>
                <MDBContainer className="text-center">
                  {      
                      itemId.idProducto.map((producto) => {
                        return (
                           <ItemOrder
                               key={producto.id}
                               item={producto}
                           />
                        );
                      })
                  }
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
            <MDBCard>
              <MDBCardBody>
                <div className="d-flex">
                  <MDBCol>Subtotal</MDBCol>
                  <MDBCol className="text-center">$ {itemId.total}</MDBCol>
                </div>
                <hr className="my-2"></hr>
                <div className="d-flex">
                  <MDBCol className="fs-4 fw-bold">TOTAL</MDBCol>
                  <MDBCol className="fs-4 fw-bold text-center">$ {itemId.total}</MDBCol>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
export default Order