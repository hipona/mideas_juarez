import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom';
import {MDBCard,MDBRow,MDBIcon,MDBBtn,MDBCol, MDBTypography,MDBContainer} from 'mdb-react-ui-kit';

  const ItemCount = ({stock, inicial, colores, onAdd}) => {
  const [cantidad, setProducto] = useState(inicial)
  const [selecColor, setSelectColor] = useState(colores[0])

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
      </MDBContainer>

      <MDBRow>
        <MDBCol md="6" className='mb-3'>
          <Link to="/Cart">
            <MDBBtn
              rounded
              color="dark"
              onClick={() => onAdd(cantidad, selecColor)}
              disabled={stock === 0 ? true : null}
              style={{ width: "180px" }}
            >
              Comprar
            </MDBBtn>
          </Link>
        </MDBCol>
        <MDBCol md="6">
          <MDBBtn
            rounded
            outline
            color="dark"
            onClick={() => onAdd(cantidad, selecColor)}
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