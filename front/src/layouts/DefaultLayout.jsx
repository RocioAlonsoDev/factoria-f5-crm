import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom'
import UserNavbarMolecule from '../components/molecules/UserNavbarMolecule'
import Sidebar from "../components/atoms/SideBarAtom"
import NavbarAtom from '../components/atoms/NavbarAtom'


import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export default function DefaultLayout({title}) {
  const { userToken } = AuthContext();
  const menuItems = [
    { label: 'Inicio', url: '/' },
    { label: 'Jornada de Selección', url: '/jornada_seleccion' },
    { label: 'Total Aspirantes', url: '/total_aspirantes' },
    { label: 'Aspirantes por Bootcamp', url: '/aspirantes_bootcamp' },
    { label: 'Estadísticas', url: '/estadísticas' },
  ];
  
  if(!userToken){
    return <Navigate to ='/login' />
  }

  return (
    <>
        <Sidebar></Sidebar>
        <UserNavbarMolecule title={title}/>
        <NavbarAtom menuItems={menuItems}></NavbarAtom>
        <Outlet className='bg-white md:block md:fixed md:top-20 md:left-64 md:right-0' />
    </>
  )
}

DefaultLayout.propTypes = {
  title: PropTypes.any,
}