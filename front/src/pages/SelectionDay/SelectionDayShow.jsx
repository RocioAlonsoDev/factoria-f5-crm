import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import TableAtom from "../../components/atoms/TableAtom";
import SelectionDayDataService from "./../../services/recruitmentService/selectionDay.service";
import PersonDataService from "../../services/crmService/person.service";
import StatusDataService from "../../services/crmService/status.service";
import AddPeopleToSelectionDayModal from "../../components/molecules/AddPeopleToSelectionDayModal";

export default function SelectionDayShow() {
  const { id } = useParams();
  const [selectionDay, setSelectionDay] = useState(null);
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddPeopleModal, setShowAddPeopleModal] = useState(false);
  const [selectedPeopleInJourney, setSelectedPeopleInJourney] = useState([]);

  useEffect(() => {
    SelectionDayDataService.get(id)
      .then((response) => {
        setSelectionDay(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar la jornada de selección:", error);
      });

    SelectionDayDataService.getPeopleInSelectionDay(id)
      .then(async (response) => {
        const peopleData = response.data.data;

        const personPromises = peopleData.map((person) => {
          return PersonDataService.get(person.id_person);
        });

        try {
          const personResponses = await Promise.all(personPromises);
          const formattedPeopleData = personResponses.map((response, index) => {
            const person = response.data;
            const selectionDayData = peopleData[index];
            return {
              nombre: person.name,
              apellidos: person.surname,
              ciudad: person.city,
              genero: person.gender,
              comentarios: selectionDayData.comments,
              estado: person.id_status,
            };
          });

          const statusPromises = formattedPeopleData.map((person) => {
            return StatusDataService.get(person.estado);
          });

          const statusResponses = await Promise.all(statusPromises);

          formattedPeopleData.forEach((person, index) => {
            person.estado = statusResponses[index].data.name;
          });

          setPeople(formattedPeopleData);
          setIsLoading(false);
          setSelectedPeopleInJourney(people.map((person) => person.id_person));
        } catch (error) {
          console.error("Error al cargar detalles de las personas:", error);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error al cargar las personas de la jornada de selección:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (!selectionDay) {
    return <div>Cargando...</div>;
  }

  const columns = ["", "nombre", "apellidos", "ciudad", "genero"];
  const data = people
    ? people.map((person) => ({
      "": (
        <Link to={`/recruitment/person/${person.id}`}>
          <button
            className="bg-transparent mx-2 text-orange-500 outline-orange-500  hover:bg-orange-500 hover:text-white 
      hover:outline-orange-500 my-2 active:bg-orange-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none 
      focus:outline-none ease-linear transition-all duration-150"
            type="button"
          >
            Ver coder
          </button>
        </Link>
      ),
        nombre: person.nombre,
        apellidos: person.apellidos,
        ciudad: person.ciudad,
        genero: person.genero,
        bootcamp: person.bootcamp,
      }))
    : [];

  const handleAddPeopleToSelectionDay = (selectedPeople) => {
    SelectionDayDataService.addPersonToSelectionDay(id, selectedPeople)
      .then((response) => {
        console.log("Personas agregadas con éxito:", response.data);
        SelectionDayDataService.getPeopleInSelectionDay(id).then((response) => {
          const updatedPeopleData = response.data.data;
          setPeople(updatedPeopleData);
          setSelectedPeopleInJourney(updatedPeopleData.map((person) => person.id_person));
        });
      })
      .catch((error) => {
        console.error("Error al agregar personas a la jornada de selección:", error);
      });

    setShowAddPeopleModal(false);
  };

  return (
    <div className="md:block md:absolute md:top-[107px] md:left-64 md:right-0 w-auto p-2">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-around">
            <h6 className="text-blueGray-700 text-xl font-bold">Jornada de selección</h6>
            <a
              href="https://drive.google.com/drive/folders/1Q1fqrvyDYGEjCq2tyxYAuXmJcobwuDTk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                Ver documentos
              </button>
            </a>
            <Link to={`/recruitment/selectiondayupdate/${id}`}>
              <button className="bg-orange-500 text-white active-bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                Modificar Jornada
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
          <button className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mb-8" onClick={() => setShowAddPeopleModal(true)}>
            Añadir personas a jornada de selección
          </button>
          {showAddPeopleModal && (
            <AddPeopleToSelectionDayModal
              onAddPeople={handleAddPeopleToSelectionDay}
              onClose={() => setShowAddPeopleModal(false)}
              selectedPeopleInJourney={selectedPeopleInJourney}
            />
          )}
          <TableAtom data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
}

