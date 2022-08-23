import React from 'react'
import {
    MDBNavbarLink,
    MDBNavbarItem
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const NavBarItems = (props) => {
  const {name} = props;
  return (
    <MDBNavbarItem >
        <MDBNavbarLink href='#'>
          {name}
        </MDBNavbarLink>
    </MDBNavbarItem>
  )
}

export default NavBarItems