import React from 'react'
import {MDBNavbarLink,MDBNavbarItem} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

const NavBarItems = (props) => {
  const {name, path} = props;
  return (
    <MDBNavbarItem >
      <Link to={path}>
        <MDBNavbarLink>
         {name}
        </MDBNavbarLink>
      </Link>
    </MDBNavbarItem>
  )
}

export default NavBarItems