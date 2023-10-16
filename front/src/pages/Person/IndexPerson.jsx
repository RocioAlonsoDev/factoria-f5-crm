// import { useState, useEffect } from 'react';
// import TableAtom from '../../components/atoms/TableAtom';
// import PersonDataService from './../../services/crmService/person.service';
// import PersonRequirementsDataService from '../../services/recruitmentService/personRequirements.service';

// export default function IndexPerson() {
//   const [people, setPeople] = useState([]);
//   const [requirements, setRequirements] = useState([]);

//   const columns = ['Nombre', 'Apellidos', 'email', 'Teléfono', 'Ciudad', 'Comunidad Autónoma', 
//     '¿Acepta la política de protección?', 'Edad', 'Género', 'Fecha de inscripción', 'RIC',
//     'Talleres F5', 'Derivada a entidad social', "JPA", 'JS', 'Turno', 'Decisión'];

//     const statusRequirementMap = {
//         1: 'En seguimiento',
//         2: 'Segundo formulario completado',
//         3: 'Sin respuesta',
//         4: 'Fuera (duplicado, baja, prueba, error, etc)',
//         5: 'Confirma asistencia',
//         6: 'Asiste',
//         7: 'Ha participado',
//         8: 'No ha participado',
//         9: 'Completos',
//         10: 'No acabados',
//         11: 'Sin comenzar',
//         12: 'Faltan enlaces',
//         13: 'Convocado/a',
//       };

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
           
//             const response = await PersonDataService.getAll();
//             setPeople(response.data.data);
    
            
//             const requirementsResponse = await PersonRequirementsDataService.getAll();
//             setRequirements(requirementsResponse.data.data); 
//             console.log(requirementsResponse.data.data)
//           } catch (error) {
//             console.error('Error al cargar datos de personas', error);
//           }
//         };
    
//         fetchData();
//       }, []);

//   function calculateAge(birthdate) {
//     if (birthdate) {
//       const birthDate = new Date(birthdate);
//       const currentDate = new Date();
  
//       let age = currentDate.getFullYear() - birthDate.getFullYear();
  
//       if (
//         currentDate.getMonth() < birthDate.getMonth() ||
//         (currentDate.getMonth() === birthDate.getMonth() &&
//           currentDate.getDate() < birthDate.getDate())
//       ) {
//         age--;
//       }
  
//       return age;
//     } else {
//       return null;
//     }
//   }

//   function formatDateString(dateString) {
//     const date = new Date(dateString);
//     const day = date.getDate().toString().padStart(2, '0');
//     const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   }
//   const data = people.map((person) => {
//     const age = person.birthdate ? calculateAge(person.birthdate) : null;
//     const formattedDate = person.created_at ? formatDateString(person.created_at) : null;
  
    
//     const ricRequirement = requirements ? requirements.find(
//       (requirement) =>
//         requirement.id_person === person.id && requirement.id_requirement === 2
//     ) : null;
  
//     const ricStatus = ricRequirement ? statusRequirementMap[ricRequirement.id_statusRequirement] : null;
  
//     return {
//       Nombre: person.name,
//       Apellidos: person.surname,
//       email: person.email,
//       Teléfono: person.phone,
//       Ciudad: person.city,
//       'Comunidad Autónoma': person.region,
//       '¿Acepta la política de protección?': person.dataprotection,
//       Edad: age,
//       Género: person.gender,
//       'Fecha de inscripción': formattedDate,
//       RIC: ricStatus,
//     };
//   });

//   return (
//     <>
//       <TableAtom
//         tableTitle={"Todas las personas inscritas"}
//         columns={columns}
//         data={data} 
//       />
//     </>
//   );
// }






import { useState, useEffect } from 'react';
import TableAtom from '../../components/atoms/TableAtom';
import PersonDataService from './../../services/crmService/person.service';
import PersonRequirementsDataService from '../../services/recruitmentService/personRequirements.service';

export default function IndexPerson() {
  const [people, setPeople] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [updatedRequirementsStatus, setUpdatedRequirementsStatus] = useState({});

  const statusOptions = [
    { id: 1, name: 'En seguimiento' },
    { id: 2, name: 'Segundo formulario completado' },
    { id: 3, name: 'Sin respuesta' },
   {id: 4, name: 'Fuera (duplicado, baja, prueba, error, etc)'},
     {id: 5, name: 'Confirma asistencia'},
        // 6: 'Asiste',
        // 7: 'Ha participado',
        // 8: 'No ha participado',
        // 9: 'Completos',
        // 10: 'No acabados',
        // 11: 'Sin comenzar',
        // 12: 'Faltan enlaces',
        // 13: 'Convocado/a',
   
    { id: 13, name: 'Convocado/a' },
  ];

  const columns = ['Nombre', 'Apellidos', 'email', 'Teléfono', 'Ciudad', 'Comunidad Autónoma', 
    '¿Acepta la política de protección?', 'Edad', 'Género', 'Fecha de inscripción', 'RIC',
    'Talleres F5', 'Derivada a entidad social', "JPA", 'JS', 'Turno', 'Decisión'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PersonDataService.getAll();
        setPeople(response.data.data);
        const requirementsResponse = await PersonRequirementsDataService.getAll();
        setRequirements(requirementsResponse.data.data); 
      } catch (error) {
        console.error('Error al cargar datos de personas', error);
      }
    };

    fetchData();
  }, []);

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

  const handleRicChange = (person) => {
    const personId = person.id;
    const newRicStatus = 13; // ID del nuevo estado RIC

    // Actualiza el estado en el objeto
    setUpdatedRequirementsStatus({
      ...updatedRequirementsStatus,
      [personId]: newRicStatus,
    });
  };
  const handleUpdateRequirements = () => {
    // Envía las actualizaciones al servidor
    Object.keys(updatedRequirementsStatus).forEach((personId) => {
      const newStatus = updatedRequirementsStatus[personId];
      PersonRequirementsDataService.updateRequirementsStatus(personId, {
        id_statusRequirement: newStatus,
      })
        .then((response) => {
          // Maneja la respuesta si es necesario
          console.log('Estado actualizado con éxito para la persona', personId);
        })
        .catch((error) => {
          // Maneja los errores si es necesario
          console.error('Error al actualizar el estado para la persona', personId, error);
        });
    });
  };

  const data = people.map((person) => {
    const age = person.birthdate ? calculateAge(person.birthdate) : null;
    const formattedDate = person.created_at ? formatDateString(person.created_at) : null;
  
    const ricRequirement = requirements ? requirements.find(
      (requirement) =>
        requirement.id_person === person.id && requirement.id_requirement === 2
    ) : null;
  
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
          value={ricRequirement ? ricRequirement.id_statusRequirement : ''} 
          onChange={(e) => handleRicChange(person, e.target.value)}
        >
          {statusOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      ),
    };
  });

  return (
    <div  className='md:block md:fixed md:top-16 md:left-64 md:right-0 w-auto p-2'>
      <TableAtom
        tableTitle={"Todas las personas inscritas"}
        columns={columns}
        data={data} 
      />
      <button onClick={handleUpdateRequirements}>Actualizar Estados</button>
    </div>
  );
}

