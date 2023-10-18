import { Outlet } from 'react-router-dom'
import UserNavbarMolecule from '../components/molecules/UserNavbarMolecule'
import Sidebar from "../components/atoms/SideBarAtom"
import NavbarAtom from '../components/atoms/NavbarAtom'


import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export default function DefaultLayoutConfiguration({title}) {
  const { userToken } = AuthContext();
  const menuItems = [
    { label: 'Inicio', url: '/' },
    { label: 'Requerimientos', url: '/configuration/requirements' },
    { label: 'Estatus de Persona', url: '/configuration/person/status' },
    { label: 'Estatus de Requerimiento', url: '/configuration/status/requirement' },
    
  ];
  
  // if(!userToken){
  //   return <Navigate to ='/login' />
  // }

  return (
    <>
        <Sidebar></Sidebar>
        <UserNavbarMolecule title={title}/>
        <NavbarAtom menuItems={menuItems}></NavbarAtom>
        <Outlet className='bg-white md:block md:fixed md:top-20 md:left-64 md:right-0' />
    </>
  )
}
