import React, { useState } from 'react';
import CarWidget from '../carWidget/CarWidget';
import NavBarItems from '../NavBarItems/NavBarItems';
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBIcon,MDBNavbarNav,MDBCollapse,MDBInputGroup} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import routes from '../Data/routes.json';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
      <Link to={`/`}>
      <MDBNavbarBrand>
            MiDEAS
      </MDBNavbarBrand>
      </Link>

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
            {routes.map((route, index) => (
                <NavBarItems key ={index} name={route.route_label} path={route.path}/>
            ))}  
            {/* <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    {
                      routes.map((item, index) => {
                        return(
                          <MDBDropdownItem key={index}>{item}</MDBDropdownItem>
                        )
                      })
                    }
                </MDBDropdownMenu>
              </MDBDropdown> */}
          </MDBNavbarNav>


          <MDBInputGroup className='d-flex w-auto mb-3'>
          <Link to="/Cart">
            <CarWidget/>
          </Link>
          </MDBInputGroup>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}