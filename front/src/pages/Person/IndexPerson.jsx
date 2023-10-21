import { useState, useEffect } from "react";
import TableAtom from "../../components/atoms/TableAtom";
import PersonDataService from "./../../services/crmService/person.service";
import PersonRequirementsDataService from "../../services/recruitmentService/personRequirements.service";
import ToggleButton from "../../components/atoms/ToggleButton";
import { Link } from "react-router-dom";
import FilterButton from "../../components/atoms/FilterButton";

export default function IndexPerson() {
  const [people, setPeople] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [selectStatus, setSelectStatus] = useState({});
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [ricFilter, setRicFilter] = useState("");
  const [jpaFilter, setJpaFilter] = useState("");
  const [jsFilter, setJsFilter] = useState("");
  const [talleresFilter, setTalleresFilter] = useState("");
  const [originalPeople, setOriginalPeople] = useState([]);

  const statusOptions = {
    1: "En seguimiento",
    2: "Segundo formulario completado",
    3: "Sin respuesta",
    4: "Fuera (duplicado, baja, prueba, error, etc)",
    5: "Confirma asistencia",
    6: "Asiste",
    7: "Ha participado",
    8: "No ha participado",
    9: "Completos",
    10: "No acabados",
    11: "Sin comenzar",
    12: "Faltan enlaces",
    13: "Convocado/a",
    14: "Enviar convocatoria",
    15: "No enviar convocatoria",
  };

  const statusColors = {
    2: "green",
    5: "green",
    6: "green",
    7: "green",
    3: "red",
    8: "red",
    13: "orange",
    14: "orange",
    15: "orange",
    4: "gray",
    1: "gray",
  };

  const columns = [
    "",
    "Nombre",
    "Apellidos",
    "email",
    "Teléfono",
    "Ciudad",
    "Comunidad Autónoma",
    "¿Acepta la política de protección de datos?",
    "Edad",
    "Género",
    "Fecha de inscripción",
    "RIC",
    "talleres F5",
    "Jornada de puertas abiertas",
    "Jornada de selección",
    "Decisión",
  ];

  const allowedMeetingOptions = [1, 3, 4, 5, 6, 8, 13, 14, 15];
  const allowedtalleresOptions = [1, 3, 4, 7, 8, 13, 14];
  const meetingStatusOptions = Object.keys(statusOptions)
    .filter((key) => allowedMeetingOptions.includes(parseInt(key)))
    .map((key) => (
      <option key={key} value={key}>
        {statusOptions[key]}
      </option>
    ));

  const talleresStatusOptions = Object.keys(statusOptions)
    .filter((key) => allowedtalleresOptions.includes(parseInt(key)))
    .map((key) => (
      <option key={key} value={key}>
        {statusOptions[key]}
      </option>
    ));

  //FILTROS

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const applyFilter = () => {
    let filteredData = originalPeople;

    // Aplicar filtro RIC
    if (ricFilter !== "") {
      const filterValue = parseInt(ricFilter);
      const ricRequirementId = 2;
      filteredData = filteredData.filter((person) => {
        const ricValue =
          parseInt(selectStatus[`${person.id}_${ricRequirementId}`]) || 0;
        return filterValue === 0 || ricValue === filterValue;
      });
    }

    // Aplicar filtro Jornada de puertas abiertas (JPA)
    if (jpaFilter !== "") {
      const filterValue = parseInt(jpaFilter);
      const jpaRequirementId = 1;
      filteredData = filteredData.filter((person) => {
        const jpaValue =
          parseInt(selectStatus[`${person.id}_${jpaRequirementId}`]) || 0;
        return filterValue === 0 || jpaValue === filterValue;
      });
    }

    // Aplicar filtro Jornada de selección (JS)
    if (jsFilter !== "") {
      const filterValue = parseInt(jsFilter);
      const jsRequirementId = 4;
      filteredData = filteredData.filter((person) => {
        const jsValue =
          parseInt(selectStatus[`${person.id}_${jsRequirementId}`]) || 0;
        return filterValue === 0 || jsValue === filterValue;
      });
    }

    // Aplicar filtro talleres F5
    if (talleresFilter !== "") {
      const filterValue = parseInt(talleresFilter);
      const talleresRequirementId = 3;
      filteredData = filteredData.filter((person) => {
        const talleresValue =
          parseInt(selectStatus[`${person.id}_${talleresRequirementId}`]) || 0;
        return filterValue === 0 || talleresValue === filterValue;
      });
    }

    // Actualizar el estado 'people' con los datos filtrados
    setPeople(filteredData);
    closeFilterModal();
  };
  //LLAMADA A LA API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PersonDataService.getAll();
        setPeople(response.data.data);
        setOriginalPeople(response.data.data);
      } catch (error) {
        console.error("Error al cargar datos de personas", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const requirementsResponse =
          await PersonRequirementsDataService.getAll();
        setRequirements(requirementsResponse.data.data);

        const selectStatusObj = {};

        requirementsResponse.data.data.forEach((requirement) => {
          selectStatusObj[
            `${requirement.id_person}_${requirement.id_requirement}`
          ] = requirement.id_statusRequirement;
        });

        setSelectStatus(selectStatusObj);
      } catch (error) {
        console.error("Error al cargar datos de requisitos", error);
      }
    };

    fetchRequirements();
  }, []);

  const handleSelectChange = async (personId, requirementId, newStatus) => {
    const key = `${personId}_${requirementId}`;

    setSelectStatus({
      ...selectStatus,
      [key]: newStatus,
    });

    const existingRecord = requirements.find(
      (requirement) =>
        requirement.id_person === personId &&
        requirement.id_requirement === requirementId
    );

    if (existingRecord) {
      await updateDatabase(existingRecord, newStatus);
    } else {
      await createDatabaseRecord(personId, requirementId, newStatus);
    }
  };

  const updateDatabase = async (existingRecord, newStatus) => {
    try {
      const updatedStatus = { id_statusRequirement: parseInt(newStatus) };
      await PersonRequirementsDataService.update(
        existingRecord.id_person,
        existingRecord.id_requirement,
        updatedStatus
      );
      console.log("Registro actualizado con éxito en la base de datos");
    } catch (error) {
      console.error(
        "Error al actualizar el registro en la base de datos",
        error
      );
    }
  };

  const createDatabaseRecord = async (personId, requirementId, newStatus) => {
    try {
      const newRecord = {
        id_person: personId,
        id_requirement: requirementId,
        id_statusRequirement: newStatus,
      };

      const response = await PersonRequirementsDataService.create(newRecord);

      console.log(
        "Registro creado con éxito en la base de datos",
        response.data
      );
    } catch (error) {
      console.error("Error al crear el registro en la base de datos", error);
    }
  };

  const calculateAge = (birthdate) => {
    if (birthdate) {
      const birthDate = new Date(birthdate);
      const currentDate = new Date();
      let age = currentDate.getFullYear() - birthDate.getFullYear();

      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return age;
    } else {
      return null;
    }
  };

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const data = people.map((person) => {
    const age = person.birthdate ? calculateAge(person.birthdate) : null;
    const formattedDate = person.created_at
      ? formatDateString(person.created_at)
      : null;
    const ricRequirementId = 2;
    const talleresRequirementId = 3;
    const jpaRequirementId = 1;
    const jsRequirementId = 4;

    const ricValue = selectStatus[`${person.id}_${ricRequirementId}`] || "";
    const talleresValue = selectStatus[`${person.id}_${talleresRequirementId}`] || "";
    const jpaValue = selectStatus[`${person.id}_${jpaRequirementId}`] || "";
    const jsValue = selectStatus[`${person.id}_${jsRequirementId}`] || "";

    return {
      "": (
        <Link to={`/person/${person.id}`}>
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
      Nombre: person.name,
      Apellidos: person.surname,
      email: person.email,
      Teléfono: person.phone,
      Ciudad: person.city,
      "Comunidad Autónoma": person.region,
      "¿Acepta la política de protección de datos?": person.dataprotection,
      Edad: age,
      Género: person.gender,
      "Fecha de inscripción": formattedDate,
      RIC: (
        <div className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full mr-2`}
            style={{ backgroundColor: statusColors[ricValue] }}
          />
          <select
            value={ricValue}
            onChange={(e) =>
              handleSelectChange(person.id, ricRequirementId, e.target.value)
            }
          >
            {meetingStatusOptions}
          </select>
        </div>
      ),
      "talleres F5": (
        <div className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full mr-2`}
            style={{ backgroundColor: statusColors[talleresValue] }}
          />
          <select
            value={talleresValue}
            onChange={(e) =>
              handleSelectChange(
                person.id,
                talleresRequirementId,
                e.target.value
              )
            }
          >
            {talleresStatusOptions}
          </select>
        </div>
      ),
      "Jornada de puertas abiertas": (
        <div className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full mr-2`}
            style={{ backgroundColor: statusColors[jpaValue] }}
          />
          <select
            value={jpaValue}
            onChange={(e) =>
              handleSelectChange(person.id, jpaRequirementId, e.target.value)
            }
          >
            {meetingStatusOptions}
          </select>
        </div>
      ),
      "Jornada de selección": (
        <div className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full mr-2`}
            style={{ backgroundColor: statusColors[jsValue] }}
          />
          <select
            value={jsValue}
            onChange={(e) =>
              handleSelectChange(person.id, jsRequirementId, e.target.value)
            }
          >
            {meetingStatusOptions}
          </select>
        </div>
      ),
    };
  });

  return (
    <div className="md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2">
      <div className="w-1/3 mx-auto m-16">
        <ToggleButton />
      </div>
      <FilterButton openFilterModal={openFilterModal} />
      {/* Modal para el filtro */}
      <div className={`modal ${isFilterModalOpen ? "block" : "hidden"}`}>
        <div className="modal-content bg-white w-1/2 mx-auto my-16 p-6 rounded-lg shadow-lg">
          <span
            className="close absolute top-4 right-4 cursor-pointer"
            onClick={closeFilterModal}
          >
            &times;
          </span>
          {/* <label className="block mb-4">
            Filtrar por edad:
            <select
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Todas las edades</option>
              <option value="30">Menos de 30 años</option>
            </select>
          </label> */}
          <h2 className="text-lg font-semibold mb-4">Filtrar por RIC</h2>
          <label className="block mb-4">
            <select
              value={ricFilter}
              onChange={(e) => setRicFilter(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Todos</option>
              <option value="1">En seguimiento</option>
              <option value="3">Sin respuesta</option>
              <option value="4">
                Fuera (duplicado, baja, prueba, error, etc)
              </option>
              <option value="5">Confirma asistencia</option>
              <option value="6">Asiste</option>
              <option value="8">No ha participado</option>
              <option value="13">Convocado/a</option>
              <option value="14">Enviar convocatoria</option>
              <option value="15">No enviar convocatoria</option>
            </select>
          </label>
          <h2 className="text-lg font-semibold mb-4">Filtrar por talleres</h2>
          <label className="block mb-4">
            <select
              value={talleresFilter}
              onChange={(e) => setTalleresFilter(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Todos</option>
              <option value="1">En seguimiento</option>
              <option value="3">Sin respuesta</option>
              <option value="4">
                Fuera (duplicado, baja, prueba, error, etc)
              </option>

              <option value="7">Ha participado</option>
              <option value="8">No ha participado</option>
              <option value="13">Convocado/a</option>
              <option value="14">Enviar convocatoria</option>
            </select>
          </label>
          <h2 className="text-lg font-semibold mb-4">
            Filtrar por Jornada de puertas abiertas
          </h2>
          <label className="block mb-4">
            <select
              value={jpaFilter}
              onChange={(e) => setJpaFilter(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Todos</option>
              <option value="1">En seguimiento</option>
              <option value="3">Sin respuesta</option>
              <option value="4">
                Fuera (duplicado, baja, prueba, error, etc)
              </option>
              <option value="5">Confirma asistencia</option>
              <option value="6">Asiste</option>
              <option value="8">No ha participado</option>
              <option value="13">Convocado/a</option>
              <option value="14">Enviar convocatoria</option>
              <option value="15">No enviar convocatoria</option>
            </select>
          </label>
          <h2 className="text-lg font-semibold mb-4">
            Filtrar por Jornada de Selección
          </h2>
          <label className="block mb-4">
            <select
              value={jsFilter}
              onChange={(e) => setJsFilter(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Todos</option>
              <option value="1">En seguimiento</option>
              <option value="3">Sin respuesta</option>
              <option value="4">
                Fuera (duplicado, baja, prueba, error, etc)
              </option>
              <option value="5">Confirma asistencia</option>
              <option value="6">Asiste</option>
              <option value="8">No ha participado</option>
              <option value="13">Convocado/a</option>
              <option value="14">Enviar convocatoria</option>
              <option value="15">No enviar convocatoria</option>
            </select>
          </label>
          <button
            onClick={applyFilter}
            className="bg-orange-500 text-white py-2 px-4 rounded hover-bg-orange-600"
          >
            Aplicar filtro
          </button>
        </div>
      </div>
      <TableAtom
        tableTitle={"PRIMER FORMULARIO: Todas las personas inscritas"}
        columns={columns}
        data={data}
      />
    </div>
  );
}
