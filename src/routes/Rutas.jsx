import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Rutas = () => {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element ={<home/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
