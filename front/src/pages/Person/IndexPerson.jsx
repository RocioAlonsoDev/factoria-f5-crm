
import { useState, useEffect } from 'react';
import TableAtom from '../../components/atoms/TableAtom';
import PersonDataService from './../../services/crmService/person.service';
import PersonRequirementsDataService from '../../services/recruitmentService/personRequirements.service';
import ToggleButton from '../../components/atoms/ToggleButton';
import { Link } from 'react-router-dom';


export default function IndexPerson() {
  const [people, setPeople] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [selectStatus, setSelectStatus] = useState({});


  

  const statusOptions = {
    1: 'En seguimiento',
    2: 'Segundo formulario completado',
    3: 'Sin respuesta',
    4: 'Fuera (duplicado, baja, prueba, error, etc)',
    5: 'Confirma asistencia',
    6: 'Asiste',
    7: 'Ha participado',
    8: 'No ha participado',
    9: 'Completos',
    10: 'No acabados',
    11: 'Sin comenzar',
    12: 'Faltan enlaces',
    13: 'Convocado/a',
    14: 'Enviar convocatoria',
    15: 'No enviar convocatoria',
  };

  const columns = ['','Nombre', 'Apellidos', 'email', 'Teléfono', 'Ciudad', 'Comunidad Autónoma',
    '¿Acepta la política de protección de datos?', 'Edad', 'Género', 'Fecha de inscripción',
    'RIC' , 'Talleres F5', 'Jornada de puertas abiertas', 'Jornada de selección', 'Decisión'];

  const allowedMeetingOptions = [1, 3, 4, 5, 6, 13, 14, 15];
  const allowedTalleresOptions = [1, 3, 4, 7, 8, 13, 14];
  const meetingStatusOptions = Object.keys(statusOptions)
    .filter((key) => allowedMeetingOptions.includes(parseInt(key)))
    .map((key) => (
      <option key={key} value={key}>
        {statusOptions[key]}
      </option>
    ));

  const talleresStatusOptions = Object.keys(statusOptions)
    .filter((key) => allowedTalleresOptions.includes(parseInt(key)))
    .map((key) => (
      <option key={key} value={key}>
        {statusOptions[key]}
      </option>
    ));

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await PersonDataService.getAll();
          setPeople(response.data.data);
        } catch (error) {
          console.error('Error al cargar datos de personas', error);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      const fetchRequirements = async () => {
        try {
          const requirementsResponse = await PersonRequirementsDataService.getAll();
          setRequirements(requirementsResponse.data.data);
  
          const selectStatusObj = {};
  
          requirementsResponse.data.data.forEach((requirement) => {
            selectStatusObj[`${requirement.id_person}_${requirement.id_requirement}`] =
              requirement.id_statusRequirement;
          });
  
          setSelectStatus(selectStatusObj);
        } catch (error) {
          console.error('Error al cargar datos de requisitos', error);
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
          requirement.id_person === personId && requirement.id_requirement === requirementId
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
        console.log('Registro actualizado con éxito en la base de datos');
      } catch (error) {
        console.error('Error al actualizar el registro en la base de datos', error);
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
  
        console.log('Registro creado con éxito en la base de datos', response.data);
      } catch (error) {
        console.error('Error al crear el registro en la base de datos', error);
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
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  

  const data = people.map((person) => {
    const age = person.birthdate ? calculateAge(person.birthdate) : null;
    const formattedDate = person.created_at ? formatDateString(person.created_at) : null;
    const ricRequirementId = 2;
    const talleresRequirementId = 3;
    const jpaRequirementId = 1;
    const jsRequirementId = 4;

    const ricValue = selectStatus[`${person.id}_${ricRequirementId}`] || '';
    const talleresValue = selectStatus[`${person.id}_${talleresRequirementId}`] || '';
    const jpaValue = selectStatus[`${person.id}_${jpaRequirementId}`] || '';
    const jsValue = selectStatus[`${person.id}_${jsRequirementId}`] || '';



    return {
      '': <Link to={`/person/${person.id}`}>
      <button
      className="bg-transparent mx-2 text-orange-500 outline-orange-500  hover:bg-orange-500 hover:text-white 
      hover:outline-orange-500 my-2 active:bg-orange-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none 
      focus:outline-none ease-linear transition-all duration-150" 
      type="button"
  >
      Ver coder 
  </button>
  </Link>,
      Nombre: person.name,
      Apellidos: person.surname,
      email: person.email,
      Teléfono: person.phone,
      Ciudad: person.city,
      'Comunidad Autónoma': person.region,
      '¿Acepta la política de protección de datos?': person.dataprotection,
      Edad: age,
      Género: person.gender,
      'Fecha de inscripción': formattedDate,
      RIC: (
        <select
          value={ricValue}
          onChange={(e) => handleSelectChange(person.id, ricRequirementId, e.target.value)}
          
        >
            {meetingStatusOptions}
        </select>
      ),
      'Talleres F5': (
        <select
          value={talleresValue}
          onChange={(e) => handleSelectChange(person.id, talleresRequirementId, e.target.value)}
        >
          {talleresStatusOptions}
        </select>
      ),
      'Jornada de puertas abiertas': (
        <select
          value={jpaValue}
          onChange={(e) => handleSelectChange(person.id, jpaRequirementId, e.target.value)}
        >
            {meetingStatusOptions}
        </select>
      ),
      'Jornada de selección': (
        <select
          value={jsValue}
          onChange={(e) => handleSelectChange(person.id, jsRequirementId, e.target.value)}
        >
          {meetingStatusOptions}
        </select>
      ),
    };
  });

  return (
    
    <div className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
    <div className="w-1/3 mx-auto m-16">
      <ToggleButton />
    </div>
    <TableAtom tableTitle={'PRIMER FORMULARIO: Todas las personas inscritas'} columns={columns} data={data} />
  </div>

    
  );
}
