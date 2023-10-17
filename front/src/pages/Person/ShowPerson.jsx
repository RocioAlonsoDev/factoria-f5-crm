import { useEffect, useState } from "react";
import { useParams } from "react-router";
import profileError from "../../assets/img/profileError.jpg";
import PersonDataService from "../../services/crmService/person.service";
import BootcampDataService from "../../services/crmService/bootcamp.service";
import StatusDataService from "../../services/crmService/status.service";
import CommentsIndexByPerson from "../Comments/CommentsIndexByPerson";
import EditShowPersonModal from "./EditShowPersonModal";

export default function ShowPerson() {
  const { id } = useParams();
  const [person, setPerson] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditShowPersonModalOpen, setIsEditShowPersonModalOpen] = useState(false);

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        const response = await PersonDataService.get(id);
        const personData = response.data;
        const bootcampId = personData.id_bootcamp;
        const statusId = personData.id_status;

        const [bootcampResponse, statusResponse] = await Promise.all([
          BootcampDataService.get(bootcampId),
          StatusDataService.get(statusId),
        ]);

        const bootcampName = bootcampResponse.data.name;
        const statusName = statusResponse.data.name;

        const updatedPerson = {
          ...personData,
          bootcamp: bootcampName,
          status: statusName
        };

        setPerson(updatedPerson);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching person data', error);
        setIsLoading(false);
      }
    };

    fetchPersonData();
  }, [id]);

  console.log("Person:", person);

  const handleEditProfileClick = () => {
    setIsEditShowPersonModalOpen(true);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6"></div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
        <form>
          <div className="flex flex-wrap">
            <div className="w-1/4 p-4 flex flex-col items-center justify-center">
              <img
                src={profileError} 
                alt="Foto de perfil"
                onError={(e) => {
                  e.target.src={profileError};
                }} 
                className="shadow-xl rounded-full h-40 w-40 object-cover border-4 border-orange-500"
              />  
            </div>
            <div className="w-3/4 p-4 flex flex-col">
              <div className="w-full p-4 flex flex-col justify-center center">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="relative w-5/12 px-4">
                    <input
                      type="text"
                      id="bootcamp" 
                      className="text-center border-0 px-3 py-3 placeholder-blueGray-300 text-orange-500 bg-white rounded text-xl font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue={person.bootcamp}
                      readOnly
                    />
                  </div>
                  <div className="relative w-5/12 px-4">
                    <input
                      type="text"
                      id="status" 
                      className="border-2 border-orange-500 text-center px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-m font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue={person.status}
                      readOnly
                    />
                  </div>
                  <div className="relative w-2/12 ">
                  <button
                    className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleEditProfileClick}
                  >
                    Modificar perfil
                  </button>
                  </div>
                </div>
              </div>

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Información Coder
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="nombre" 
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="nombre" 
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={person.name}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="apellido" 
                      >
                        Apellido
                      </label>
                      <input
                        type="text" 
                        id="apellido" 
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={person.surname}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="genero" 
                      >
                        Género
                      </label>
                      <input
                        type="text" 
                        id="genero" 
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={person.gender}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="dni" 
                      >
                        DNI
                      </label>
                      <input
                        type="text" 
                        id="dni" 
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue={person.dni}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Información de Contacto
            </h6>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="movil" 
                  >
                    Móvil
                  </label>
                  <input
                    type="text" 
                    id="movil" 
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={person.phone}
                    readOnly
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="email" 
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email" 
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={person.email}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="ciudad" 
                  >
                    Ciudad
                  </label>
                  <input
                    type="text" 
                    id="ciudad" 
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={person.city}
                    readOnly
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="region" 
                  >
                    Región
                  </label>
                  <input
                    type="text" 
                    id="region"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={person.region}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="direccion" 
                  >
                    Dirección
                  </label>
                  <input
                    type="text"
                    id="direccion" 
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={person.address}
                    
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

          </form>
        </div>
      </div>

      {isEditShowPersonModalOpen && (
        <EditShowPersonModal
          setIsEditModalOpen={setIsEditShowPersonModalOpen}
          personId={id}
          updatePerson={setPerson}
        />
      )}

      <CommentsIndexByPerson />
    </>

  );
}







