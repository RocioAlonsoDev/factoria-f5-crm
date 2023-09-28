import { Outlet } from 'react-router-dom'
import NavbarMolecule from '../components/molecules/NavbarMolecule'
export default function DefaultLayout() {
  return (
    <>
        <NavbarMolecule />
        <Outlet />
    </>
  )
}
