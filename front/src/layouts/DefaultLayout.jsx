import { Outlet } from 'react-router-dom'
import NavbarMolecule from '../components/molecules/NavbarMolecule'
import Sidebar from "../components/atoms/SideBarAtom"


import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export default function DefaultLayout() {
  const { currentUser, userToken } = AuthContext();

  if(!userToken){
    return <Navigate to ='/login' />
  }

  return (
    <>
    <div className='flex w-full bg-red-500'>
      <Sidebar></Sidebar>
        <div className='w-auto'>
          <NavbarMolecule />
          <Outlet />
        </div>
    </div>
        
    </>
  )
}
