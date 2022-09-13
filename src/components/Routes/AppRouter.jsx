import React, { useState } from 'react'
import Home from '../../paginas/Home'
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Cart from '../Cart/Cart'
import Order from '../Order/Order'
import MantenimientoGarantia from '../../paginas/MantenimientoGarantia'
import Contacto from '../../paginas/Contacto'
import Footer from '../Footer/Footer'
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

const AppRouter = () => {

  const [cartIsResponse] = useState(true)

  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path ='/' element={<Home/>} />
          <Route path='*' element={<>NOT FOUND</>}/>
          <Route path ='/productos' element={<ItemListContainer/>} />
          <Route path ='/item/:id' element={<ItemDetailContainer/>} />
          <Route path ='/Cart' element={<Cart/>} />
          <Route path ='/Order/:id' element={<Order/>} />
          <Route path ='/mantenimiento' element={<MantenimientoGarantia/>} />
          <Route path ='/contacto' element={<Contacto/>} />
        </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter