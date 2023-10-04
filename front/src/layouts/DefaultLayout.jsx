import { Outlet } from 'react-router-dom'
import NavbarMolecule from '../components/molecules/NavbarMolecule'

import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export default function DefaultLayout() {
  const { currentUser, userToken } = AuthContext();

  if(!userToken){
    return <Navigate to ='/login' />
  }

  return (
    <>
        <NavbarMolecule />
        <Outlet />
    </>
  )
}
