import { Link } from "react-router-dom";


export default function NavbarLandingAtom() {
  
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between ">
           
            <Link
              className="text-orange-500 text-3xl font-bold leading-relaxed inline-block mr-4 py-2  uppercase"
              to="#"
            >
              Factoría F5
            </Link>
           
            <Link to="/login" >
                <button className="bg-orange-500 border border-orange-500 text-white uppercase font-semibold px-4 py-2 rounded mb-4 mt-4">
                        Login
                </button>
            </Link>
              
            
          </div>
          
        </div>
      </nav>


    </>
  );
}