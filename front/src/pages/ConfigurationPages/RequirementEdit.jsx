import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import RequirementDataService from "../../services/recruitmentService/requirement.service.js"
import { useNavigate } from 'react-router-dom';

export default function RequirementEdit() {
    const { id } = useParams(); 
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    async function handleUpdate() {
    try {
      console.log("Updating with data:", { name, description });
      await RequirementDataService.update(id, { name, description });
      console.log("Update successful!");
      
      navigate(`/configuration/requirements`);

    } catch (error) {
      console.error('Error updating requirement:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await RequirementDataService.get(id);
            setName(response.data.name)
            setDescription(response.data.description)
          } catch (error) {
            console.error('Error fetching requirement:', error);
          }
        };
    
        fetchData(); 
    
      }, [id]);
    

    return (
    
      <div className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
      <div
  
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
       
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl"
        >
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
            </div>
            <div className="relative p-6 flex-auto">
              <div className="mb-4">
                <label className="block text-blueGray-700 text-sm font-bold mb-2">Nombre:</label>
                <input
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-blueGray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-blueGray-700 text-sm font-bold mb-2">Descripción:</label>
                <textarea
                  name="description"
                  rows={10}
                  cols={100}
                  wrap="wrap"
                  maxLength={200}
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-blueGray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
           
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => navigate(`/configuration/requirements`)}
              >
                Cerrar
              </button>
              
              <button
                className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleUpdate}
              >
                Guardar
              </button>
              
            </div>
          </div>
        </div>
      
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
      
    );
  }