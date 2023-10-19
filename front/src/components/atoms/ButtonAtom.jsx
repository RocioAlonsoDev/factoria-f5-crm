import { Link } from "react-router-dom"

export default function ButtonAtom({addlink,addbutton}) {
  return (
    <Link to={addlink}>
        <button
            className="bg-transparent mx-2 text-orange-500 outline-orange-500  hover:bg-orange-500 hover:text-white 
            hover:outline-orange-500 my-2 active:bg-orange-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none 
            focus:outline-none ease-linear transition-all duration-150" 
            type="button"
        >
            {addbutton}
        </button>
    </Link>
  )
}
