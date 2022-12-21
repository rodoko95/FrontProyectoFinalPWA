import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.png'

const Layout = () => {
  return (

    <div className="navbar">
        <img src={logo} alt="Logo" />
        <NavLink 
        to='/'
        className={({isActive}) => (isActive ?  'link active' : 'link')}        
        > Home </NavLink>
        <NavLink
         to='/about'
         className={({isActive}) => (isActive ?  'link active' : 'link')}
         > Sobre nosotros </NavLink>
        <NavLink
         to='/dolls'
         className={({isActive}) => (isActive ?  'link active' : 'link')}
         > Las Muñecas </NavLink>
        <NavLink
         to='/api'
         className={({isActive}) => (isActive ?  'link active' : 'link')}
         > Roz-API </NavLink>
        <NavLink
         to='/order'
         className={({isActive}) => (isActive ?  'link active' : 'link')}
         > Formulario de Compra </NavLink>
    </div>
  )
}

export default Layout
