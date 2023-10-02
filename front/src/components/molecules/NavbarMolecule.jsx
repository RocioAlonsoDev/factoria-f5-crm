import { Link } from 'react-router-dom'
import UserDropdownAtom from '../atoms/UserDropdownAtom'

export default function NavbarMolecule() {
  return (

    <nav className="top-0 left-0 w-full z-10 bg-white md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
    <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
      <div className='flex gap-5'>
        <Link
          className="text-orange-600 text-sm uppercase hidden lg:inline-block font-semibold"
          to="/"
        >
          Inicio
        </Link>
        <Link
          className="text-orange-600 text-sm uppercase hidden lg:inline-block font-semibold"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="text-orange-600 text-sm uppercase hidden lg:inline-block font-semibold"
          to="/signup"
        >
          Register
        </Link>
        <Link
        className="text-orange-600 text-sm uppercase hidden lg:inline-block font-semibold"
        to="/seleccion"
        >
          Selección
        </Link>
        <Link
          className="text-orange-600 text-sm uppercase hidden lg:inline-block font-semibold"
          to="/seguimiento"
        >
          Seguimiento
        </Link>
      </div>
      

      <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
        <div className="relative flex w-full flex-wrap items-stretch">
          <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search here..."
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
          />
        </div>
      </form>

      <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
        <UserDropdownAtom />
      </ul>
    </div>
  </nav>

  )
}
