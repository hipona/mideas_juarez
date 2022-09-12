import React from 'react'

export default function validateInfo(value){

   if(!value.nombre.trim()){
    errors.nombre = "Nombre es Requrido"
   }

   if(!value.apellido.trim()){
    errors.apellido = "apellido es Requrido"
   }

   if(!value.telefono.trim()){
    errors.telefono = "telefono es Requrido"
   }
   
//    if(!value.email){
//     errors.nombre = "Email es Requrido"
//    }else if(!/   $/i.test(value.email)){
//     errors.nombre = "Email es Requrido"
//    }
   return errors;
}