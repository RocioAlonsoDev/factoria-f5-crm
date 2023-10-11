import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import TableAtom from "../../components/atoms/TableAtom";
import SelectionDayDataService from "./../../services/recruitmentService/selectionDay.service";
import PersonDataService from "../../services/crmService/person.service";



export default function SelectionDayShow() {

  const { id } = useParams();
  const [selectionDay, setSelectionDay] = useState(null);
  const [people, setPeople] = useState();

  useEffect(() => {
    SelectionDayDataService.getPeopleInSelectionDay(id)
      .then((response) => {
        const peopleData = response.data.data; 
        setPeople(peopleData);
        console.log(peopleData);

        setSelectionDay(response.data)
  
        
        const promises = peopleData.map((person) => {
          return PersonDataService.get(person.id_person)
            .then((personResponse) => {
              console.log(personResponse.data)
              
            })
            .catch((error) => {
              console.error(`Error al obtener detalles de la persona ${person.id_person}:`, error);
            });
        });
  
        
      })
      .catch((error) => {
        console.error('Error al cargar las personas de la jornada de selección:', error);
      });
  }, [id]);

 
  

  // useEffect (() =>{
  //   SelectionDayDataService.getPeopleInSelectionDay(id)
  //     .then((response) => {
  //     setPeople(response.data.data);
  //     console.log(response.data.data);
  //     })
  //     .catch((error) => {
  //    console.error('Error al cargar las personas de la jornada de selección:', error);
  //    });

     
  // }, [id]);
  useEffect(() => {
    SelectionDayDataService.getPeopleInSelectionDay(id)
      .then((response) => {
        const peopleData = response.data.data; 
        setPeople(peopleData);
        console.log(peopleData);
      })
      .catch((error) => {
        console.error('Error al cargar las personas de la jornada de selección:', error);
      });
  }, [id]);

  if (!selectionDay){
    return <div>Cargando...</div>
  }

  // const data =[
  //   {Nombre: 'Yolanda',
  //   Apellidos: 'Zahonero Alfaro',
  //   Ciudad: 'A Coruña',
  //   Género: 'Femenino',
  //   Bootcamp: 'FemNorte',
  //   Asistencia: 'Convocada',}
  // ];

  const columns =[
    'nombre',
    'apellidos',
    'ciudad',
    'genero',
    'bootcamp',
    'asistencia',
  ]

  // const data = people ? people.map((person) => {
  //   return {
  //     'nombre' : person.id_person,
  //   }
  // }) : [];

  const data = people
  ? people.map((person) => ({
  nombre: person.name, 
      
  ciudad: person.ciudad,
      
  }))
  : [];


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
            
          <div className="text-center flex justify-around">
            
            <h6 className="text-blueGray-700 text-xl font-bold">Jornada de selección</h6>
            <Link to={selectionDay.document}>
              <button className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
               Ver documentos
              </button>
            </Link>
            <Link to="/recruitment/selectionday/update">
              <button className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
               Modificar jornada
              </button>
            </Link>
            <Link to="/recruitment/selectionday/add">
              <button className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
               Crear nueva jornada
              </button>
            </Link>

          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-md mt-3 mb-6 font-bold uppercase">
              Datos de la jornada de selección
            </h6>
            <div className="flex flex-wrap">
              
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-md font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Escuela
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={selectionDay.school}
                    readOnly
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-md font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Día y hora de la jornada de selección
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={selectionDay.date}
                    readOnly
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-md font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Link de reunión
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={selectionDay.link}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-md mt-3 mb-6 font-bold uppercase">
              Información adicional
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-sm font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Comentarios
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={selectionDay.comment}
                    rows="4"
                    readOnly
                  ></textarea>
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-md mt-3 mb-6 font-bold uppercase">
              Personas asociadas a esta reunión
            </h6>
            <TableAtom data={data} columns={columns}>


            </TableAtom>
        </div>
      </div>
    </>
  )
}
