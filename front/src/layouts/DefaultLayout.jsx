import { Outlet } from 'react-router-dom'
import UserNavbarMolecule from '../components/molecules/UserNavbarMolecule'
import Sidebar from "../components/atoms/SideBarAtom"
import NavbarAtom from '../components/atoms/NavbarAtom'
import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export default function DefaultLayout({title}) {
  const { userToken } = AuthContext();

  if(!userToken){
    return <Navigate to ='/login' />
  }

  return (
    <>
        <Sidebar></Sidebar>
        <UserNavbarMolecule title={title}/>
        <NavbarAtom />
        <Outlet className='bg-white md:block md:fixed md:top-20 md:left-64 md:right-0' />
    </>
  )
}
