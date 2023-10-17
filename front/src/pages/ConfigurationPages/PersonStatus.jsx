import StatusDataService from "../../services/crmService/status.service.js";
import { useState, useEffect } from "react";
import StatusModalAtom from "./StatusModalAtom.jsx"

const PersonStatus= () => {
 
  const [statuses, setStatuses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    const fetchAll= async ()=> {
      const response = await StatusDataService.getAll()
      setStatuses(response.data.data) 
    }
    return fetchAll;
   
 
  }, []);

  const handleDelete = async (id) => {
    try {
      await StatusDataService.delete(id);
      const updatedStatuses = statuses.filter((status) => status.id !== id);
      setStatuses(updatedStatuses);
    } catch (error) {
      console.error('Error deleting status:', error);
    }
  };

  const handleCreate = async (data) => {
    try {
      await StatusDataService.create(data);
      const response = await StatusDataService.getAll();  
    setStatuses(response.data.data);
    setIsModalOpen(false);  
    } catch (error) {
      console.error('Error creating status:', error);
    }
  };

  

    return (
        <div className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
            <div className="rounded-t bg-white mb-0 px-6 py-6">
            
                <div className="text-center flex justify-between">
              
                    <h6 className="text-blueGray-700 text-xl font-bold">Estatus de Persona</h6>
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
                </tr>
                </thead>
                <tbody>
                  {statuses.map(status => (
                <tr key={status.id}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {status.id}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {status.name}
                </td>
                <td>
                    <button onClick={ ()=>handleDelete(status.id)}
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
            {isModalOpen && <StatusModalAtom setIsModalOpen={setIsModalOpen} handleCreate={handleCreate} />}
        </div>
        
    );
  };

export default PersonStatus;