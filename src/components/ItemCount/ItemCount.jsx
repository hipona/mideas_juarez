import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom';
import {MDBCard,MDBRow,MDBIcon,MDBBtn,MDBCol, MDBTypography,MDBContainer} from 'mdb-react-ui-kit';
import { CartContext } from '../../context/CartContext';

  const ItemCount = ({stock, inicial, colores, onAddCart, onAddShop}) => {
  const [cantidad, setProducto] = useState(inicial)
  const [selecColor, setSelectColor] = useState(colores[0])

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  const handleChange = event => {
    setSelectColor(event.target.value);
  };

  return (
    <MDBCard className="text-center p-3">
      <MDBContainer className="mb-4">
        <MDBRow>
          <MDBCol sm='5' className='mb-3'>
            <select
              value={selecColor}
              onChange={handleChange}
              className="form-select form-select-sm"
            >
              {colores.map((colores) => (
                <option key={colores} value={colores}>
                  {colores}
                </option>
              ))}
            </select>
          </MDBCol>
          <MDBCol size='md'>
            <MDBRow>
              <MDBCol size='5'>
                <MDBBtn
                  color="dark"
                  floating
                  onClick={() => setProducto(cantidad - 1)}
                  disabled={cantidad <= inicial ? true : null}
                >
                  <MDBIcon fas icon="minus" />
                </MDBBtn>
              </MDBCol>
              <MDBCol size='2'>
                <MDBTypography tag="h5">{cantidad}</MDBTypography>
              </MDBCol>
              <MDBCol size='5'>
                <MDBBtn
                  color="dark"
                  floating
                  onClick={() => setProducto(cantidad + 1)}
                  disabled={cantidad >= stock ? true : null}
                >
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBTypography tag='small' className='text-muted '>
                  Stock disponible<label className='px-2'><strong>{stock}</strong></label>
                </MDBTypography>
      </MDBContainer>
      
      <MDBRow>
        <MDBCol md="6" className='mb-3'>
        {
         cart.length ? (
            <Link to='/Cart'>
                <MDBBtn
                  rounded
                  color="dark"
                  style={{ width: "180px" }}
                >
                  Ir al <MDBIcon fas icon="shopping-cart" />
                </MDBBtn>
            </Link>
         ) 
         : 
         (
          <MDBBtn
            rounded
            color="dark"
            disabled= "true"
            style={{ width: "180px" }}
            >
            Ir al <MDBIcon fas icon="shopping-cart" />
          </MDBBtn>
         )
        }
        </MDBCol>
        <MDBCol md="6">
          <MDBBtn
            rounded
            outline
            color="dark"
            onClick={() => onAddCart(cantidad, selecColor)}
            disabled={stock === 0 ? true : null}
          >
            Agregar al carrito
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}

export default ItemCount;