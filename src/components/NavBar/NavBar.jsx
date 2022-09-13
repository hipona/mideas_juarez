import React, { useEffect, useState } from 'react';
import CarWidget from '../carWidget/CarWidget';
import NavBarItems from '../NavBarItems/NavBarItems';
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBIcon,MDBNavbarNav,MDBCollapse,MDBInputGroup} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import routes from '../Data/routes.json';

import db from '../../service';
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  const [items, setItemList] = useState([]);
    
  useEffect(() => {
    const getItemsMenuFirebase  = async () => {
      try{
        const itemCollection = query(collection(db, "menuNavBar"), orderBy('orden'));
        const col = await getDocs(itemCollection);
        const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data() })
        setItemList(res);
      } catch (error) {
        //console.log(error)
      }
    }
       getItemsMenuFirebase()
       return () => {
       }
  }, [])

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
            {items.map((route, index) => (
                <NavBarItems key ={index} name={route.route_label} path={route.path}/>
            ))}  
          </MDBNavbarNav>

          <MDBInputGroup className='d-flex w-auto mb-3'>
          <Link to='/Cart' >
            <CarWidget/>
          </Link>
          </MDBInputGroup>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}