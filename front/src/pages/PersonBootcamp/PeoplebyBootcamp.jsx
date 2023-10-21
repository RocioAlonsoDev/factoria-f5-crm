
import BootcampDataService from "../../services/crmService/bootcamp.service";
import { useState, useEffect } from "react";
import { useParams } from 'react-router';

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
              
                    <h6 className="text-blueGray-700 text-xl font-bold">Apirantes por Bootcamp</h6>
                   
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
                  Id Bootcamp
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " 
                    
                    
                  }
                >
                  Nombre Bootcamp
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    
                  }
                >
                  Inicio Bootcamp
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                    
                  }
                >
                  Aspirantes
                </th>
                </tr>
                </thead>
                <tbody>
                {bootcamp.peopleInBootcamp.map((person) => (
                  <tr key={person.id}>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {bootcamp.bootcampData.id}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {bootcamp.bootcampData.name}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {bootcamp.bootcampData.startDate} 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {person.name}
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