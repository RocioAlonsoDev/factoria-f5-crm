import PersonDataService from "../../services/crmService/person.service";
import BootcampDataService from "../../services/crmService/bootcamp.service";
import { useState, useEffect } from "react";
import { useParams } from 'react-router';

export default function PersonbyBootcamp () {
    const [bootcamp, setBootcamp] = useState({});
    const { id } = useParams();
    //const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const fetchBootcampData = async () => {
        try {
          const response = await BootcampDataService.getPeopleInBootcamp(id);
          const bootcampData = response.data;
          const personId = bootcampData.id_bootcamp;
          
  
          const [personResponse] = await Promise.all([
            PersonDataService.get(personId),
            
          ]);
  
          const personName = personResponse.data.name;
         
  
          const updatedBootcamp = {
            ...bootcampData,
                person: personName,
                
          };
  
          setBootcamp(updatedBootcamp);
         
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
                  Inicio
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
                
                <tr key={bootcamp.id}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {bootcamp.peopleInBootcamp[0].id}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {bootcamp.peopleInBootcamp[0].name}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {bootcamp.startDate}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  {bootcamp.peopleInBootcamp[0].name}
                </td>
                </tr>
                
                </tbody>
                </table>
            </div>
            
        </div>
         </>
    );

}