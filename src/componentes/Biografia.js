import React from 'react';
import  "../hoja-de-estilo/Biografia.css";

export  function Biografia(props) {
  return (
    <div className='contenedor-biografia'>
        <img className='imagen-biografia' src={require(`../imagenes/car-${props.imagen}.jpg`)} />
        <div className='contenedor-text-biografia'>
          <p className='biografia'>
            <strong>{props.nombre}</strong> hecho en {props.pais}
          </p>
          <p className='cargo-biografia'>
            {props.cargo} de <strong>{props.empresa}</strong>
          </p>
          <p className='text-biografia'>{props.biografia}</p>
        </div>
    </div>
  )
}
