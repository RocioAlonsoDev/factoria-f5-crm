
import BootcampDataService from "../../services/crmService/bootcamp.service";
import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';

export default function PeoplebyBootcamp () {
    const [bootcamp, setBootcamp] = useState({
      bootcampData: {}, 
      peopleInBootcamp: [], 
    });
   
    
  const { id } = useParams();

    useEffect(() => {
    const fetchBootcampData = async () => {
       try {
        
        const bootcampResponse = await BootcampDataService.get(id);
        const bootcampData = bootcampResponse.data;
        
        const peopleResponse = await BootcampDataService.getPeopleInBootcamp(id);
        const peopleData = peopleResponse.data.peopleInBootcamp;

        setBootcamp({
          bootcampData: bootcampData,
          peopleInBootcamp: peopleData,
        });
      } catch (error) {
        console.error('Error fetching bootcamp data', error);
      }
    };

    fetchBootcampData();
    }, [id]);
  
    console.log("Bootcamp:", bootcamp);
  
    return (

        <>
        <div className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
            <div className="rounded-t bg-white mb-0 px-6 py-6">
            
                <div className="text-center flex justify-between">
              
                    <h6 className="text-blueGray-700 text-xl font-bold">Apirantes {bootcamp.bootcampData.name}</h6>
                    <h6 className="text-blueGray-700 text-xl font-bold">Inicio {bootcamp.bootcampData.startDate}</h6>
                    <h6 className="text-blueGray-700 text-xl font-bold">Finalización {bootcamp.bootcampData.endDate}</h6>
                </div>
            </div>
            <div>
            <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left "
                    
                  }
                >
                  Nombre Aspirante
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left "
                    
                  }
                >
                  Apellido Aspirante
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left "
                    
                  }
                >
                  ' '
                </th>
                </tr>
                </thead>
                <tbody>
                {bootcamp.peopleInBootcamp.map((person) => (
                  <tr key={person.id}>
                
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {person.name}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {person.surname}
                </td>
                <td>
                <Link to={`/person/${person.id}`}>
                  <button
                             className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                             type="button"
                          
                    >
                    Ficha Aspirante
                  </button>
                  </Link>
                  </td>
                </tr>
                  ))}
                </tbody>
                </table>
            </div>
            
        </div>
         </>
    );

}