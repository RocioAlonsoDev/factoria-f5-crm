import { useState, useEffect } from "react";
import TableAtom from "../../components/atoms/TableAtom";
import PersonDataService from "./../../services/crmService/person.service";
import PersonRequirementsDataService from "../../services/recruitmentService/personRequirements.service";
import FilterButton from "../../components/atoms/FilterButton";
import { Link } from "react-router-dom";
import ToggleButton from "../../components/atoms/ToggleButton";
import YearlyStatsCard from "../../components/atoms/Statistics/YearlyStatsCard";
import StatusCard from "../../components/atoms/StatusCards";

export default function IndexPersonSecondPhase() {
  const [people, setPeople] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [selectStatus, setSelectStatus] = useState({});
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedFilterStatus, setSelectedFilterStatus] = useState("");
  const [originalPeople, setOriginalPeople] = useState([]);
  const [ageFilter, setAgeFilter] = useState("");

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

  const columns = [
    "",
    "Nombre",
    "Apellidos",
    "email",
    "Edad",
    "Motivación",
    "Nivel de inglés",
    "Titulación",
    "¿Está inscrito en otra formación?",
    "¿Cómo nos ha conocido?",
    "Situación laboral",
    "Link a ejercicios",
    "Estado de ejercicios",
    "Observaciones",
  ];

  const statusColors = {
    9: "green",
    10: "orange",
    11: "red",
    12: "gray",
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



  const countPeopleInExercisesStatus = (requirementId) => {
    const exercisesStatusCounts = Object.keys(statusOptions).reduce((counts, key) => {
      const count = originalPeople.reduce((acc, person) => {
        const statusKey = `${person.id}_${requirementId}`;
        if (selectStatus[statusKey] === parseInt(key)) {
          return acc + 1;
        }
        return acc;
      }, 0);
  
      if (count > 0) {
        counts[key] = count;
      }
  
      return counts;
    }, {});
  
    return exercisesStatusCounts;
  };
  
  const exercisesStatusCounts = countPeopleInExercisesStatus(6);

  const allowedExercicesOptions = [1, 9, 10, 11, 12, 4];

  const exercicesStatusOptions = Object.keys(statusOptions)
    .filter((key) => allowedExercicesOptions.includes(parseInt(key)))
    .map((key) => (
      <option key={key} value={key}>
        {statusOptions[key]}
      </option>
    ));

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const applyFilter = () => {
    if (selectedFilterStatus === "" && ageFilter === "") {
      setPeople(originalPeople); 
    } else {
      let filteredData = originalPeople;

      if (selectedFilterStatus !== "") {
        //filtro por estado de ejercicios
        filteredData = filteredData.filter((person) => {
          const exercicesRequirementId = 6;
          const exercicesValue =
            parseInt(selectStatus[`${person.id}_${exercicesRequirementId}`]) ||
            0;
          const filterValue = parseInt(selectedFilterStatus);
          return filterValue === 0 || exercicesValue === filterValue;
        });
      }

      if (ageFilter !== "") {
        //filtro por edad
        filteredData = filteredData.filter((person) => {
          const age = person.birthdate ? calculateAge(person.birthdate) : null;
          return age !== null && age < parseInt(ageFilter);
        });
      }

      setPeople(filteredData);
    }

    closeFilterModal();
  };

  //STATS

  const currentYear = new Date().getFullYear();
const lastYear = currentYear - 1;

const peopleWithMotivation = originalPeople.filter((person) => {
  const motivation = person.motivation || '';
  return (
    motivation !== "No ha rellenado segundo formulario" &&
    motivation !== "No ha contestado"
  );
});

const totalPeople = peopleWithMotivation.length;

const peopleInCurrentYear = peopleWithMotivation.filter((person) => {
  const registrationDate = new Date(person.updated_at);
  return registrationDate.getFullYear() === currentYear;
});

const peopleInLastYear = peopleWithMotivation.filter((person) => {
  const registrationDate = new Date(person.updated_at);
  return registrationDate.getFullYear() === lastYear;
});

const currentYearTotal = peopleInCurrentYear.length;
const lastYearTotal = peopleInLastYear.length;

const difference = currentYearTotal - lastYearTotal;
const percentageChange = lastYearTotal > 0 ? ((difference / lastYearTotal) * 100).toFixed(2) : 0;

const cardColor = difference > 0 ? "green" : "red";
const arrowIcon = difference > 0 ? "↑" : "↓";

const calculateFemaleCount = (people) => {
  return people.filter((person) => person.gender === "Mujer").length;
};

const calculateAgeBelow30Count = (people) => {
  const currentYear = new Date().getFullYear();
  return people.filter((person) => {
    const birthYear = new Date(person.birthdate).getFullYear();
    return currentYear - birthYear < 30;
  }).length;
};

const femaleCount = calculateFemaleCount(peopleWithMotivation);
const ageBelow30Count = calculateAgeBelow30Count(peopleWithMotivation);

//API


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PersonDataService.getAll();
  
        
        const filteredPeople = response.data.data.filter(person => {
          const motivation = person.motivation || ''; 
          return (
            motivation !== "No ha rellenado segundo formulario" &&
            motivation !== "No ha contestado"
          );
        });
  
        setOriginalPeople(filteredPeople);
        setPeople(filteredPeople);
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
    const exercicesRequirementId = 6;

    const exercicesValue =
      selectStatus[`${person.id}_${exercicesRequirementId}`] || "";

    return {
      "": (
        <Link to={`/recruitment/person/${person.id}`}>
          <button
            className="bg-transparent mx-2 text-orange-500 outline-orange-500  hover:bg-orange-500 hover:text-white 
      hover:outline-orange-500 my-2 active-bg-orange-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none 
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
      Edad: age,
      Género: person.gender,
      Motivación: person.motivation,
      "Nivel de inglés": person.englishLevel,
      Titulación: person.degree,
      "¿Está inscrito en otra formación?": person.anotherCourse,
      "¿Cómo nos ha conocido?": person.howArrived,
      "Situación laboral": person.employmentStatus,
      "Link a ejercicios": person.exerciseUrl,
      "Estado de ejercicios": (
        <div className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full mr-2`}
            style={{ backgroundColor: statusColors[exercicesValue] }}
          />
          <select
            value={exercicesValue}
            onChange={(e) =>
              handleSelectChange(
                person.id,
                exercicesRequirementId,
                e.target.value
              )
            }
          >
            {exercicesStatusOptions}
          </select>
        </div>
      ),
    };
  });

  return (
    <div className='md:block md:absolute md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
      <div className="w-1/3 mx-auto m-10">
        <ToggleButton />
        </div>
        <div className="flex flex-wrap">
      <YearlyStatsCard
  currentYearTotal={currentYearTotal}
  lastYearTotal={lastYearTotal}
  difference={difference}
  percentageChange={percentageChange}
  cardColor={cardColor}
  arrowIcon={arrowIcon}
  cardTitle='Personas que siguen en el proceso'
  totalPeople={totalPeople}
/>
<YearlyStatsCard
            currentYearTotal={femaleCount}
            lastYearTotal={0} 
            cardTitle="Total de mujeres"
            totalPeople={femaleCount}
        />
        <YearlyStatsCard
            currentYearTotal={ageBelow30Count}
            lastYearTotal={0} 
            cardTitle="Personas menores de 30 años"
            totalPeople={ageBelow30Count}
        />
        </div>

        <div className="flex flex-wrap">
        <StatusCard
  title="Estado de ejercicios"
  statusCounts={exercisesStatusCounts}
  statusOptions={statusOptions}
  statusColors={statusColors}
/>
        </div>
  
       
      
      <FilterButton openFilterModal={openFilterModal} />
      <div className="max-h-[70vh] overflow-y-auto">
  <TableAtom
    tableTitle="SEGUNDO FORMULARIO: Todas las personas en el proceso"
    columns={columns}
    data={data}
  />
</div>
  
     
      {isFilterModalOpen && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="modal-content bg-white w-1/2 p-6 rounded-lg shadow-lg relative">
            <span
              className="close absolute top-4 right-4 cursor-pointer"
              onClick={closeFilterModal}
            >
              &times;
            </span>
            <label className="block mb-4">
              <h2 className="text-lg font-semibold mb-4">
                Filtrar por edades
              </h2>
              <select
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="">Todas las edades</option>
                <option value="30">Menos de 30 años</option>
              </select>
            </label>
            <h2 className="text-lg font-semibold mb-4">
              Filtrar por Estado de Ejercicios
            </h2>
            <label className="block mb-4">
              Filtrar por estado:
              <select
                value={selectedFilterStatus}
                onChange={(e) => setSelectedFilterStatus(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="">Todos</option>
                <option value="9">Completos</option>
                <option value="10">No acabados</option>
                <option value="11">Sin comenzar</option>
                <option value="12">Faltan enlaces</option>
              </select>
            </label>
            <button
              onClick={applyFilter}
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Aplicar filtro
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
  
  
  
}
