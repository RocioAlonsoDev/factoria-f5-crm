import { Link, useLocation } from "react-router-dom";

export default function ToggleButton() {
  const location = useLocation();

  const isFirstPhase = location.pathname === "/recruitment/person/index";
  const isSecondPhase = location.pathname === "/recruitment/person/secondphase";

  return (
    <div className="flex">
      <button
        className={`w-1/2 p-2 rounded-l-full shadow-md transition duration-300 ${
          isFirstPhase ? "bg-orange-500 text-white" : "bg-white text-orange-500"
        }`}
      >
        <Link to="/recruitment/person/index">Primera Fase</Link>
      </button>

      <button
        className={`w-1/2 p-2 rounded-r-full shadow-md transition duration-300 ${
          isSecondPhase ? "bg-orange-500 text-white" : "bg-white text-orange-500"
        }`}
      >
        <Link to="/recruitment/person/secondphase">Segunda Fase</Link>
      </button>
    </div>
  );
}

