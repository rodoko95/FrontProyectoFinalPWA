import { Link } from "react-router-dom";
import React from 'react'
import logo from '../src/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="Logo" />
        <Link to='/'>Inicio</Link>
        <Link to='/dolls'>Las muñecas</Link>
        <Link to='/about'>Sobre nosotros</Link>
        <Link to='/order'>Formulario de orden</Link>
        <Link to='/api'>Roz-API</Link>
    </div>
  )
}
export default Navbar 