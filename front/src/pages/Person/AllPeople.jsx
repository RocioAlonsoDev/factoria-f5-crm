import { useEffect, useState } from 'react';
import PersonDataService from '../../services/crmService/person.service';
import TableAtom from '../../components/atoms/TableAtom';
import { Link } from 'react-router-dom';

export default function AllPeople() {
  const [person, setPerson] = useState([]);

    useEffect(() =>{
        PersonDataService.getAll()
        .then((response)=>{
            setPerson(response.data.data)
            console.log(response.data.data)
        })
        .catch((error)=>{
            console.error('error al obtener datos de persona', error)
        })
    }, []);

    const data = person.map((person) => ({
        Nombre: person.name,
        Apellido: person.surname,
        '': <Link to={`/person/${person.id}`}>Ver más</Link> 
      }));
      console.log("Data:", data);
    
    const columns = ['Nombre', 'Apellido', ''];
  
    return (
    <div className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
        
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <TableAtom data={data} columns={columns} />
        </div>



    </div>
  )
}
