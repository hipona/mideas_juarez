import React, { useState } from 'react';
import CarWidget from '../carWidget/CarWidget';
import NavBarItems from './NavBarItems/NavBarItems';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBInputGroup
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  const navBarItems = ["Inicio", "Cómo Comprar", "Mantenimento & Garantía", "Contacto"];

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>MiDEAS</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
        <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>

          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {navBarItems.map((item) => (
                <NavBarItems name ={item}/>
            ))}
          </MDBNavbarNav>

            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Productos
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Ver todos los Productos</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Accesorios en Cuero</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Casa + Oficina</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}

          {/* <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
            <input className='form-control' placeholder="Buscador" aria-label="Search" type='Search' />
            <MDBBtn outline>Buscar</MDBBtn>
          </MDBInputGroup> */}

          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
            <CarWidget/>
          </MDBInputGroup>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}