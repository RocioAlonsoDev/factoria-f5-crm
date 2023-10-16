import RequirementDataService from "../../services/recruitmentService/requirement.service.js"
import { useState, useEffect } from "react";
import RequirementModalAtom from "./RequirementModalAtom.jsx";
//import RequirementEditModalAtom from "./RequirementEditModalAtom.jsx";
import {Link} from 'react-router-dom';


const Requirements= () => {
  const [requirements, setRequirements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  //const [selectedRequirement/*, setSelectedRequirement*/] = useState(null);
  
  useEffect(() => {

    const fetchAll= async ()=> {
      const response = await RequirementDataService.getAll()
      setRequirements(response.data.data) 
    }
    return fetchAll;
  
  }, []);

  const handleDelete = async (id) => {
    try {
      await RequirementDataService.delete(id);
      const updatedRequirements = requirements.filter((requirement) => requirement.id !== id);
      setRequirements(updatedRequirements);
    } catch (error) {
      console.error('Error deleting requirement:', error);
    }
  };

  const handleCreate = async (data) => {
    try {
      await RequirementDataService.create(data);
      const response = await RequirementDataService.getAll();
    setRequirements(response.data.data);
    setIsModalOpen(false); 
    } catch (error) {
      console.error('Error creating requirement:', error);
    }
  };

  /* const handleUpdate = async (id, data) => {
    try {
      await RequirementDataService.update(id, data);
      const response = await RequirementDataService.update(id, data);
    setRequirements(response.data.data);
    setIsModalOpen(false); 
    } catch (error) {
      console.error('Error updating requirement:', error);
    }
  };*/

    return (
        <div className='md:block md:fixed md:top-16 md:left-64 md:right-0 w-auto p-2'>
            <div className="rounded-t bg-white mb-0 px-6 py-6">
            
                <div className="text-center flex justify-between">
              
                    <h6 className="text-blueGray-700 text-xl font-bold">Requerimientos</h6>
                    <button
                             className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                             type="button"
                             onClick={() => setIsModalOpen(true)}
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
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    
                  }
                >
                  Descripción
                </th>
                </tr>
                </thead>
                <tbody>
                {requirements.map(requirement => (
                <tr key={requirement.id}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {requirement.id}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {requirement.name}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {requirement.description}
                </td>
                <td>
                <Link to={`edit/${requirement.id}`}>
                  <button
                             className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                             type="button"
                            //  onClick={() =>{ setIsEditModalOpen(true);
                              
                            //   setSelectedRequirement(requirement);
                            //  }}
                    >
                    Editar
                  </button>
                  </Link>
                <button  onClick={ ()=>handleDelete(requirement.id)}
                             className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                             type="button"
                  >
                    Eliminar
                </button>
                </td>
                </tr>
                ))}
                </tbody>
                </table>
            </div>
            {isModalOpen && <RequirementModalAtom setIsModalOpen={setIsModalOpen} handleCreate={handleCreate} />}
            {/*isEditModalOpen && <RequirementEditModalAtom setIsEditModalOpen={setIsEditModalOpen} handleUpdate={handleUpdate} selectedRequirement={selectedRequirement*/}
        </div>
    );
  };
  
             
export default Requirements;