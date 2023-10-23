import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import profileError from "../../assets/img/profileError.jpg";
import PersonDataService from "../../services/crmService/person.service";
import BootcampDataService from "../../services/crmService/bootcamp.service";
import StatusDataService from "../../services/crmService/status.service";

export default function EditShowPersonModal({ setIsEditModalOpen, personId, updatePerson, bootcamp, status }) {
  const [formData, setFormData] = useState({
    bootcamp: bootcamp || '',
    status: status || ''
  });


useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PersonDataService.get(personId);
        setFormData(response.data);

        const bootcampId = response.data.id_bootcamp;
        const statusId = response.data.id_status;

        // Fetch bootcamp and status details
        const [bootcampResponse, statusResponse] = await Promise.all([
          BootcampDataService.get(bootcampId),
          StatusDataService.get(statusId),
        ]);

        const bootcampName = bootcampResponse.data.name;
        const statusName = statusResponse.data.name;

        // Update the form data with the fetched values
        setFormData((prevData) => ({
          ...prevData,
          bootcamp: bootcampName,
          status: statusName,
        }));
      } catch (error) {
        console.error('Error fetching person data:', error);
      }
    };

    fetchData();
  }, [personId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleUpdatePerson = async () => {
    try {
      // Send the updated data to the server and update the local state
      await PersonDataService.update(personId, formData);
      setIsEditModalOpen(false);

      // Update the local person information
      updatePerson({ ...formData });
    } catch (error) {
      console.error('Error updating person:', error);
    }
  };

  console.log("formData.bootcamp", formData.bootcamp)

  return (
    <>
      <div className="w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onClick={() => setIsEditModalOpen(false)}>
        <div className="relative w-auto my-6 mx-auto pt-20 max-w-full" onClick={handleModalClick}>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Editar perfil</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setIsEditModalOpen(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="flex flex-wrap">
                <div className="w-1/4 p-4 flex flex-col items-center justify-center">
                  <img
                    src={formData.image}
                    alt="Foto de perfil"
                    onError={(e) => {
                      e.target.src = profileError;
                      e.target.onerror = null;
                    }}
                    className="shadow-xl rounded-full h-40 w-40 object-cover border-4 border-orange-500"
                  />
                </div>
                <div className="w-3/4 p-4 flex flex-col">
                  <div className="w-full p-4 flex flex-col justify-center center">
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="relative w-5/12 px-4">
                        <select
                            id="bootcamp"
                            name="bootcamp"
                            className="text-center border-0 px-3 py-3 placeholder-blueGray-300 text-orange-500 bg-white rounded text-xl font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={formData.bootcamp}
                            onChange={handleInputChange}
                          >
                            <option value="" disabled>
                              Selecciona un bootcamp
                            </option>
                            <option value="No definido">No definido</option>
                            <option value="Digital Academy">Digital Academy</option>
                            <option value="FemCoders Norte">FemCoders Norte</option>
                            <option value="Rural Camp">Rural Camp</option>
                            <option value="Bootcamp IA Madrid">Bootcamp IA Madrid</option>
                        </select>
                      </div>
                      <div className="relative w-5/12 px-4">
                        <select
                            id="status"
                            name="status"
                            className="border-2 border-orange-500 text-center px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-m font-semibold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={formData.status}
                            onChange={handleInputChange}
                          >
                            <option value="" disabled>
                              Selecciona un estado
                            </option>
                            <option value="Aspirante">Aspirante</option>
                            <option value="Convocada/o">Convocada/o</option>
                            <option value="Descartada/o">Descartada/o</option>
                            <option value="Coder">Coder</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Información Coder
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="nombre">
                          Nombre
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="apellido">
                          Apellido
                        </label>
                        <input
                          type="text"
                          id="surname"
                          name="surname"
                          value={formData.surname}
                          onChange={handleInputChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="genero">
                          Género
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={formData.gender}
                            onChange={handleInputChange}
                          >
                            <option value="" disabled>
                              Selecciona un género
                            </option>
                            <option value="Mujer">Mujer</option>
                            <option value="Hombre">Hombre</option>
                            <option value="No binario">No binario</option>
                            <option value="Fluido">Fluido</option>
                            <option value="Otros">Otros</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="dni">
                          DNI
                        </label>
                        <input
                          type="text"
                          id="dni"
                          name="dni"
                          value={formData.dni}
                          onChange={handleInputChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="movil">
                      Móvil
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="ciudad">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="region">
                      Región
                    </label>
                    <input
                      type="text"
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="direccion">
                      Dirección
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cerrar
                </button>
                <button
                  className="bg-orange-500 text-white active-bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleUpdatePerson}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

EditShowPersonModal.propTypes = {
  setIsEditModalOpen: PropTypes.func.isRequired,
  personId: PropTypes.number.isRequired,
  updatePerson: PropTypes.func.isRequired,
  bootcamp: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
