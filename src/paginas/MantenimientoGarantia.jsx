import React from 'react'
import {MDBContainer,MDBRow,MDBCol} from 'mdb-react-ui-kit';
const MantenimientoGarantia = () => {
  return (
    <MDBContainer className="px-4">
    <h2>
    Mantenimiento & Garantía
    </h2>
      <MDBRow className='gx-5'>
        <MDBCol>
          <div className='p-3'>GARANTÍA.
            Nuestra marca es referente en diseño, calidad y manufactura nacional. Nuestro manifesto va por la utilidad y calidad de los objetos, y no por los materiales y procesos artesanales, los cuales más que ser un valor agregado, es nuestro deber cuidar al 100%. Trabajamos con materiales que son duraderos y poseen las mejores características, como cuero 100% curtido vegetal, garantizando así cada objeto de la colección de por vida, y garantizando por un año todas las piezas de nuestras colecciones. En caso de cualquier defecto o daño, escríbenos a venta@mecideas.com.ar </div>
        </MDBCol>
        <MDBCol>
          <div className='p-3'>¿Qué cubre esta garantía?
           La garantía cubre defectos de fabricación y defectos en los materiales e insumos, asegurándonos de que nuestras piezas cumplan con tu propósito por un largo tiempo. Nuestra garantía no aplica a broches atornillables extraviados, los cuales categorizan como repuestos (ver más abajo). Si además de esto, tu pieza muestra un desgaste por uso o la dañaste de alguna forma, no te preocupes, también otorgamos servicio de mantenimiento profesional para tus objetos (con un cargo adicional). Recuerda que nuestros objetos no son impermeables, por lo que si accidentalmente los mojas no aplica para garantía, aunque no te preocupes, puedes darle mantenimiento.</div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
export default MantenimientoGarantia