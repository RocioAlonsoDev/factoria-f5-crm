import { Link } from "react-router-dom"

export default function ToggleButton() {
  return (
    <div className="flex">
      
      <button className="w-1/2 bg-orange-500 text-white p-2 rounded-l-full shadow-md transition duration-300">
      <Link to='/recruitment/person/index'>
        Primera Fase
        </Link>
      </button>
     
      <button className="w-1/2 bg-white text-orange-500 p-2 rounded-r-full shadow-md transition duration-300">
      <Link to='/recruitment/person/secondphase'>
        Segunda Fase
        </Link>
      </button>
    </div>
  )
}
