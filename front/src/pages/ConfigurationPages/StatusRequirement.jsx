import StatusRequirementDataService from "../../services/recruitmentService/statusRequirement.service.js"
import { useState, useEffect } from "react";
import RequirementModalAtom from "./RequirementModalAtom.jsx";
//import RequirementEditModalAtom from "./RequirementEditModalAtom.jsx";
import {Link} from 'react-router-dom';

const StatusRequirement= () => {

  const [statusRequirements, setStatusRequirements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  useEffect(() => {
  const fetchAll= async ()=> {
    const response = await StatusRequirementDataService.getAll()
    setStatusRequirements(response.data.data) 
  }
  return fetchAll;

}, []);

const handleDelete = async (id) => {
  try {
    await StatusRequirementDataService.delete(id);
    const updatedStatusRequirements = statusRequirements.filter((statusRequirement) => statusRequirement.id !== id);
    setStatusRequirements(updatedStatusRequirements);
  } catch (error) {
    console.error('Error deleting status requirement:', error);
  }
};

    return (
        <div className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
            <div className="rounded-t bg-white mb-0 px-6 py-6">
            
                <div className="text-center flex justify-between">
              
                    <h6 className="text-blueGray-700 text-xl font-bold">Status de Requerimiento</h6>
                    <button
                             className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                             type="button"
                    >
                    CREAR
                    </button>
                </div>
            </div>
            <div>
            <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " 
                  }
                >
                  Id
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " 
                    
                    
                  }
                >
                  Nombre
                </th>
                
                </tr>
                </thead>
                <tbody>
                <tr>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  3
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Pendiente
                </td>
                
                <td>
                    <button
                             className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                             type="button"
                    >
                    Eliminar
                    </button>
                </td>
                </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
  };
  
  
export default StatusRequirement;