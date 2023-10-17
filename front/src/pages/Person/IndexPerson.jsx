
import { useState, useEffect } from 'react';
import TableAtom from '../../components/atoms/TableAtom';
import PersonDataService from './../../services/crmService/person.service';
import PersonRequirementsDataService from '../../services/recruitmentService/personRequirements.service';


export default function IndexPerson() {
  const [people, setPeople] = useState([]);
  const [requirements, setRequirements] = useState([]);
  

  const statusOptions = {
    1: 'En seguimiento',
    2: 'Segundo formulario completado',
    3: 'Sin respuesta',
    4: 'Fuera (duplicado, baja, prueba, error, etc)',
    5: 'Confirma asistencia',
    13: 'Convocado/a',
  };

  const columns = ['Nombre', 'Apellidos', 'email', 'Teléfono', 'Ciudad', 'Comunidad Autónoma', 
    '¿Acepta la política de protección?', 'Edad', 'Género', 'Fecha de inscripción', 'RIC'];

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
      } catch (error) {
        console.error('Error al cargar datos de requisitos', error);
      }
    };

    fetchRequirements();
  }, []);

  const handleRicChange = (personId, newStatus) => {
    const updatedPeople = people.map((person) => {
      if (person.id === personId) {
        return {
          ...person,
          RIC: statusOptions[newStatus],
        };
      }
      return person;
    });
    setPeople(updatedPeople);

   
    updateDatabase(personId, newStatus);
  };

  const updateDatabase = async (personId, newStatus) => {
    try {
      const personRequirement = requirements.find(
        (requirement) => requirement.id_person === personId && requirement.id_requirement === 2
      );

      if (personRequirement) {
        const updatedStatus = { id_statusRequirement: parseInt(newStatus) };
        await PersonRequirementsDataService.update(
          personRequirement.id_person,
          personRequirement.id_requirement,
          updatedStatus
        );
        console.log('Estado actualizado con éxito en la base de datos');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error al actualizar el estado en la base de datos', error);
    }
  };

  function calculateAge(birthdate) {
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
  }

  function formatDateString(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  
const data = people.map((person) => {
  const age = person.birthdate ? calculateAge(person.birthdate) : null;
  const formattedDate = person.created_at ? formatDateString(person.created_at) : null;
  const personRequirement = requirements.find(
    (requirement) => requirement.id_person === person.id && requirement.id_requirement === 2
  );

  const ricValue = personRequirement ? personRequirement.id_statusRequirement : '';

  return {
    Nombre: person.name,
    Apellidos: person.surname,
    email: person.email,
    Teléfono: person.phone,
    Ciudad: person.city,
    'Comunidad Autónoma': person.region,
    '¿Acepta la política de protección?': person.dataprotection,
    Edad: age,
    Género: person.gender,
    'Fecha de inscripción': formattedDate,
    RIC: (
      <select
  value={ricValue}
  onChange={(e) => handleRicChange(person.id, e.target.value)}
>
  {Object.keys(statusOptions).map((key) => (
    <option key={key} value={key}>
      {statusOptions[key]}
    </option>
  ))}
</select>
    ),
  };
});

return (
  <>
    <TableAtom tableTitle={'Todas las personas inscritas'} columns={columns} data={data} />
  </>
);
}
