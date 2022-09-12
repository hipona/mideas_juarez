import React, { useState, useContext, useEffect } from 'react'
import { MDBInput,MDBCard,MDBCardBody,MDBBtn,MDBCol,MDBIcon} from 'mdb-react-ui-kit';
import { CartContext } from '../../context/CartContext';
import db from '../../service';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const Formulario = () => {
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;  

    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState(null);

    const totalItems = () =>{
        let totalItems = cart.map(item => (item.cant)).reduce((ant,act)=>ant+act,0);
        return totalItems
    }

    const total = () =>{
        let totalCompra = cart.map(item => (item.cant * item.valor)).reduce((ant,act)=>ant+act,0);
        return totalCompra
    }

    const [formulario, setDatos] = useState({
        buyer: {
            email: "",
            nombre: "",
            apellido: "",
            telefono: "",
        },
        total: total(),
        items: totalItems(),
        date: Date.now()
    })

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
        setErrors.nombre = "Email es Requrido"
        alert("Email Requerido")
    }else if(!regexEmail.test(formulario.buyer.email.trim())){
        setErrors.email = "Email Valido";
        alert("Email Mal")
        return;
    }
    if(!formulario.buyer.nombre.trim()){
        setErrors.nombre = "Nombre es Requrido"
        alert("Nombre es Requrido")
        return;
    }
    if(!formulario.buyer.apellido.trim()){
        setErrors.nombre = "Apellido es Requrido"
        alert("Apellido es Requrido")
        return;
    }
    if(!formulario.buyer.telefono.trim()){
        setErrors.nombre = "Teléfono es Requrido"
        alert("Teléfono es Requrido")
        return;
    }
    generarTiket(formulario);
    //Limpiar Carrito
   };

   const generarTiket = async (formulario) => {
     try {
        const col = collection(db,"ordenes")
        const order = await addDoc(col,formulario)
        console.log(order.id)
        setResponse(true)
     } catch (error) {
        console.log(error)
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
              {totalItems()} Items
            </MDBCol>
          </div>
          <hr className="my-2"></hr>
          <div className="d-flex">
            <MDBCol className="fs-4 fw-bold">TOTAL</MDBCol>
            <MDBCol className="fs-4 fw-bold text-center">${total()}</MDBCol>
          </div>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        {totalItems() === 0 ? (
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
            {errors.nombre && <p>{errors.nombre}</p>}
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
        disabled={totalItems() === 0 ? true : null}
        //onClick={() => generarTiket(formulario)}
        onClick={enviarDatos}
        className="my-2"
        rounded
        color="dark"
        style={{ width: "100%", height: "50px" }}
      >
        Finalizar la compra
      </MDBBtn>
      {response && "Los Datos Fueron Enviados.."}
    </>
  );
}

export default Formulario