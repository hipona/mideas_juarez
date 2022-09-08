import React from 'react'
import { MDBTable, MDBTableBody,MDBBadge,MDBBtn,MDBIcon,MDBTableHead } from 'mdb-react-ui-kit';

const CartItem = ({item, deleteCartPorId}) => {
 const {id, img, titulo, valor, cuotas, stock, descripcion, selecColor, cant} = item;   
  return (
      <MDBTable align='middle'>
      <MDBTableBody>
        <tr>
          <th scope='row'>
            <div className='d-flex align-items-center'>
              <img
                src={img}
                style={{ width: '75px'}}
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{titulo}</p>
                <p className='text-muted mb-0'>{`$ ${valor} x 1 un.`}</p>
                <p className='text-muted mb-0'>{selecColor}</p>
              </div>
            </div>
          </th>
          <td>
            <MDBBadge color='dark' pill>
            {cant}
            </MDBBadge>
          </td>
          <td>
           <label className='fs-4'> ${item.cant * item.valor}</label>
          </td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
               <MDBIcon fas icon="trash-alt" onClick={()=>deleteCartPorId(item.id)}/>
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  )
}

export default CartItem