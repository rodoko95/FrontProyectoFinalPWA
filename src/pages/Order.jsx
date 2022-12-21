import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';

const Order = () => {

  //api de la database
  const URL = 'https://backproyectofinalpwa-production.up.railway.app/crear';

  //inicializamos variables vacías para el useState
  const [inputs, setInputs] = useState({
      nombre: "",
      numero: "",
      Arma:"",
      Kanji:""
  })

  //función para setear las variables
  const handleChange = async (e) => {
      setInputs({
          ...inputs,
          [e.target.name]: e.target.value
      })
  }

  //función del post
  const handleClick = async () => {
      await axios.post(URL,inputs)//enviamos datos
      setInputs({//limpiamos los inputs
        nombre: "",
        numero: "",
        Arma:"",
        Kanji:""
      })

      
  }


  return (
      <div className='section m-5'>
          <h2>
              Formulario de compra
          </h2>
          <Form>

              {Object.keys(inputs).map((key, index) => (
              <Form.Group className="mb-3" key={index}>
                  <Form.Label id="form">
                      {key}
                  </Form.Label>
                  <Form.Control 
                      name={key}
                      value={inputs[key]}
                      onChange={handleChange}
                  />
              </Form.Group>
              ))}

              <div className="text-center w-100">
                  <Button variant="primary" type="button" onClick={handleClick}>
                      Comprar muñeca
                  </Button>
              </div>
          </Form>

          <p>P.D: Puedes insertar tu nombre pero recuerda, quedara con el resto de los muñecos creados en la API, consultar al admin de la pagina para actualizacion de data </p>
          <p2>P.D.D: En el numero puede asignarse un numero u texto como se desee</p2>
      </div>
  )
}

export default Order









