import React from 'react'
import ilustracion1 from '../assets/img/ilustracion1.svg'

const Seccion1 = ({ titulo, parrafo, textoBoton }) => {
  return (
    <section className='wave-contenedor website'>
      <img src={ilustracion1} alt='' />
      <div className='contenedor-textos-main'>
        <h2 className='titulo left'>{titulo}</h2>
        <p className='parrafo'>{parrafo}
        </p>
        <a href='' className='cta'>{textoBoton}</a>
      </div>
    </section>
  )
}

export default Seccion1
