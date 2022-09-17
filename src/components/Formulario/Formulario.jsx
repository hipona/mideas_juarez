import React, { useState, useContext } from 'react'
import { MDBInput,MDBCard,MDBCardBody,MDBBtn,MDBCol,MDBIcon,MDBSpinner} from 'mdb-react-ui-kit';
import CartProvider, { CartContext } from '../../context/CartContext';
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';

import db from '../../service';
import { addDoc, collection, getDocs, Timestamp } from 'firebase/firestore';

const Formulario = ({total, compra}) => {
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;  
    
    const navigate = useNavigate()

    const [formulario, setDatos] = useState({
      buyer: {
        email: "",
        nombre: "",
        apellido: "",
        telefono: "",
      },
      total: compra,
      items: total,
      //idProducto: Object.values(cart),
      idProducto: cart.map(({id: id, titulo: titulo, valor: valor, stock: stock, selecColor: selecColor, img: img, descripcion: descripcion, cant: cant}) => ({id, titulo, valor, stock, selecColor, img, descripcion, cant})),

      date: Timestamp.fromDate(new Date()),
    });

    const {buyer: {email, nombre, apellido, telefono},} = formulario;
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setDatos({
            ...formulario,
            buyer:{
                ...formulario.buyer,
                [name]: value,
            },
        });
        
    };

    const enviarDatos = (e) => {
      e.preventDefault();
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  
      if(!formulario.buyer.email.trim()){
          return swal({
              title: "Error!",
              text: "Ingrese Un Email",
              icon: "error",
            })
      }else if(!regexEmail.test(formulario.buyer.email.trim())){
          return swal({
              title: "Error!",
              text: "Ingrese Un Email Valido",
              icon: "error",
            })
      }
      if(!formulario.buyer.nombre.trim()){
          return swal({
              title: "Error!",
              text: "Ingrese El Nombre",
              icon: "error",
          })
      }else if(!regexName.test(formulario.buyer.nombre.trim())){
          return swal({
              title: "Error!",
              text: "Ingrese Nombre Valido sin Numero",
              icon: "error",
            })
      }
      if(!formulario.buyer.apellido.trim()){
          return swal({
              title: "Error!",
              text: "Ingrese El Apellido",
              icon: "error",
          })
      }
      if(!formulario.buyer.telefono.trim()){
          return swal({
              title: "Error!",
              text: "Ingrese El Teléfono",
              icon: "error",
          })
      }
      generarTiket(formulario);
      //Limpiar Carrito
     };

    const toDescription=(id)=>{
        navigate(`/Order/${id}`)
    }

   const generarTiket = async (formulario) => {
     try {
        const col = collection(db,"ordenes")
        const order = await addDoc(col,formulario)
        toDescription(order.id)
        //productosItems(cart)
     } catch (error) {
        //console.log(error)
     }
   }

  return (
    <>

      <MDBCard>
        <MDBCardBody>
          <div className="d-flex">
            <MDBCol>
              <MDBIcon fas icon="cart-arrow-down" /> Un total de
            </MDBCol>
            <MDBCol className="text-center fw-bold">
              {total} Items
            </MDBCol>
          </div>
          <hr className="my-2"></hr>
          <div className="d-flex">
            <MDBCol className="fs-4 fw-bold">TOTAL</MDBCol>
            <MDBCol className="fs-4 fw-bold text-center">${compra}</MDBCol>
          </div>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        {total === 0 ? (
          <></>
        ) : (
          <MDBCardBody>
            Datos del Comprador
            <MDBInput
              className="my-2"
              name="email"
              type="text"
              value={email}
              required
              label="Email"
              onChange={handleChange}
            />
            <MDBInput
              className="my-2"
              label="Nombre"
              name="nombre"
              type="text"
              value={nombre}
              onChange={handleChange}
            />
            <MDBInput
              className="my-2"
              label="Apellido"
              name="apellido"
              type="text"
              value={apellido}
              onChange={handleChange}
            />
            <MDBInput
              label="Telefono"
              name="telefono"
              type="text"
              value={telefono}
              onChange={handleChange}
            />
          </MDBCardBody>
        )}
      </MDBCard>
        <MDBBtn
          disabled={total === 0 ? true : null}
          onClick={enviarDatos}
          className="my-2"
          rounded
          color="dark"
          style={{ width: "100%", height: "50px" }}
        >
          Finalizar la compra
        </MDBBtn>
        
    </>
  );
}

export default Formulario