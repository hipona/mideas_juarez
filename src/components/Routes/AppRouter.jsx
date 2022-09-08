import React from 'react'
import Home from '../../paginas/Home'
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import MantenimientoGarantia from '../../paginas/MantenimientoGarantia'
import Contacto from '../../paginas/Contacto'
import Footer from '../Footer/Footer'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from '../Cart/Cart'

const AppRouter = () => {

  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/productos" element={<ItemListContainer/>} />
          <Route path ="/item/:id" element={<ItemDetailContainer/>} />
          <Route path ="/Cart" element={<Cart/>} />
          <Route path ="/mantenimiento" element={<MantenimientoGarantia/>} />
          <Route path ="/contacto" element={<Contacto/>} />
        </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter