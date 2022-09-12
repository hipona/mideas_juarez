import React, { useState } from 'react'
import db from '../service';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const useForm = (initialForm, validateForm) => {
 const [form, setForm] = useState(initialForm);
 const [errors, setError] = useState({});
 const [loading, setLoading] = useState(false);
 const [response, SetResponse] = useState(null);

 const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
       ...form,
       [name]:value
    });
 };

 const handleBlur = (e) => {
    handleChange(e);
    setError(validateForm(form));
 };


//  const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(validateForm(form));

//     if(Object.keys(errors).length === 0){
//         alert("Enviendo ..")
//     }else{
//         return;
//     }

//  };

 const generarTiket = async (form) => {
    try {
       const col = collection(db,"ordenes")
       const order = await addDoc(col,form)
       //console.log(order.id)
    } catch (error) {
       console.log(error)
    }
  }
   
 return {
   form,
   errors,
   loading,
   response,
   handleChange,
   handleBlur,
   generarTiket,
 };
};

export default useForm