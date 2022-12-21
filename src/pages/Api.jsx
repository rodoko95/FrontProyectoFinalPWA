import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const API = () => {


        const [maidens, setMaiden] = useState([]);

        //api de mi database
        const URL = 'https://backproyectofinalpwa-production.up.railway.app/datos';
  
  //Creamos una funcion para usar el useeffect

  const getMaiden = async () =>{
    try {
      const { data } = await axios.get(URL);
      setMaiden(data.maidens)
      console.log(data.maidens);
    } catch (error){
      console.log(error);
    }
  }

  useEffect(() =>{
   getMaiden()
  }, []);
  
    return (
        <div className='section m-5'>
            <h2>
            Bienvenido a la Roz-API (Tu muñeco u muñeca queda aqui)
            </h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Numero</th>
          <th>Arma</th>
          <th>Kanji</th>
        </tr>
      </thead>
      <tbody>
        {maidens.map(maiden => 
          <tr>
          <td>{maiden._id}</td>
          <td>{maiden.nombre}</td>
          <td>{maiden.numero}</td>
          <td>{maiden.Arma}</td>
          <td>{maiden.Kanji}</td>
        </tr>
        )}
      </tbody>
    </Table>
        </div>
    )
}

export default API
