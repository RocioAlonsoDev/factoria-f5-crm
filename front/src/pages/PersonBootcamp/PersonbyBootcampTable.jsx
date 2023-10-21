import { useParams } from 'react-router';
import BootcampDataService from '../../services/crmService/bootcamp.service';
import PersonDataService from '../../services/crmService/person.service';
import { useState, useEffect } from 'react';
import TableAtom from '../../components/atoms/TableAtom';



export default function PersonbyBootcampTable() {
  const { id } = useParams();
  const [bootcamps, setBootcamps] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    console.log('ID:', id);
    PersonDataService.showByBootcamp(id)
      .then(async (response) => {
        if (Array.isArray(response.data.data)) {
          const peopleData = response.data.data;
          const bootcampPromises = peopleData.map((people) => {
            return BootcampDataService.get(people.id_bootcamp);
          });

          try {
            const bootcampResponses = await Promise.all(bootcampPromises);
            console.log('Bootcamp Responses:', bootcampResponses);

            const updatedBootcamps = peopleData.map((people, index) => {
              const personBootcampInfo = bootcampResponses[index].data.person_bootcamp;
              console.log('Bootcamp:', people);
              return {
                ...people,
                person: personBootcampInfo.person,
              };
            });

            setBootcamps(updatedBootcamps);
            setIsLoading(false);
          } catch (error) {
            console.error('Error al cargar detalles de bootcamps:', error);
            setIsLoading(false);
          }
        } else {
          console.error('Response data is not an array of bootcamps:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error al cargar los bootcamps:', error);
        setIsLoading(false);
      });
  }, [id]);
  console.log('ID:', id);
  console.log('Bootcamps:', bootcamps);

  if (isLoading) {
    return <div>Cargando...</div>;
  }


  const data = bootcamps.map((bootcamp) => ({
    Nombre: bootcamp.name,
    Inicio: bootcamp.startDate,
    Fin: bootcamp.endDate,
    Aspirantes: bootcamp.person,
    //''
  }));
  console.log('Data:', data);

  const columns = ['Bootcamp', 'Inicio', 'Fin', 'Aspirantes'];

  return (
    <div className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Aspirantes por Bootcamp:</h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg-px-10 py-10 pt-0">
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <TableAtom data={data} columns={columns} />
          </div>
        </div>
        
      </>
        </div>
  );
}