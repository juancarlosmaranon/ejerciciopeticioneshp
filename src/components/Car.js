import React from 'react'
import {useState} from 'react';

export default function Car(props) {

  //TENDREMOS LA VARIABLE PARA AVERIGUAR SI EL COCHE ESTA
  //ARRANCADO O NO...
  const [estado, setEstado]=useState(false);
  //TENDREMOS OTRA VARIABLE PARA VISUALIZAR LA VELOCIDAD
  //DEL VEHIUCLO
  const [velocidad, setVelocidad]=useState(0);
  
  var coche ={
    marca: props.Marca,
    modelo: props.Modelo,
    aceleracion: parseInt(props.Aceleracion),
    velocidadMaxima: parseInt(props.VelocidadMaxima),
  };

  //CREAMOS UN METODO PARA DEVOLVER EL ESTADO DEL COCHE
  //CON UN DIBUJO HTML
  const comprobarEsatdo=()=>{
    if(estado == true){
      return (<h1 style={{color:"green"}}>Arrancado</h1>);
    }else{
      return (<h1 style={{color:"red"}}>Detenido</h1>);
    }
  }

  //VAMOS A REALIZAR UN METODO PARA ACELERAR EL VEHICULO
  const acelerarCoche=()=>{
    if(estado == false){
      alert("El coche esta detenido");
      setVelocidad(0);
    }else{
      if(velocidad >= coche.velocidadMaxima){
        setVelocidad(coche.velocidadMaxima);
      }else{
        setVelocidad (velocidad + coche.aceleracion);
      }
    }
  }

  return (
    <div>
      <h1 style={{color:"fuchsia"}}>
        Component Car {coche.marca},{coche.modelo}  
      </h1>
      <div>
        {comprobarEsatdo()}
      </div>
      <h1>Velocidad actual {velocidad} km/hora</h1>
      <button onClick={()=>{
        setEstado(!estado);
        if(estado){
          setVelocidad(0);
        }
      }}>
        Arrancar/Detener
      </button>
      <button onClick={()=> acelerarCoche()}>
        Acelerar coche
      </button>
    </div>
  );
}
