// import { useState, useEffect } from 'react';
// import TableAtom from '../../components/atoms/TableAtom';
// import PersonDataService from './../../services/crmService/person.service';
// import PersonRequirementsDataService from '../../services/recruitmentService/personRequirements.service';

// export default function IndexPerson() {
//   const [people, setPeople] = useState([]);
//   const [requirements, setRequirements] = useState([]);
//   const [ricStatus, setRicStatus] = useState({});
//   const [talleresStatus, setTalleresStatus] = useState({});
//   const [jpaStatus, setJpaStatus] = useState ({});
//   const [jsStatus, setJsStatus] = useState ({});

//   const statusOptions = {
//     1: 'En seguimiento',
//     2: 'Segundo formulario completado',
//     3: 'Sin respuesta',
//     4: 'Fuera (duplicado, baja, prueba, error, etc)',
//     5: 'Confirma asistencia',
//     6: 'Asiste',
//     7: 'Ha participado',
//     8: 'No ha participado',
//     9: 'Completos',
//     10: 'No acabados',
//     11: 'Sin comenzar',
//     12: 'Faltan enlaces',
//     13: 'Convocado/a',
//     14: 'Enviar convocatoria',
//     15: 'No enviar convocatoria'
//   };
  

//   const columns = ['Nombre', 'Apellidos', 'email', 'Teléfono', 'Ciudad', 'Comunidad Autónoma', 
//     '¿Acepta la política de protección de datos?', 'Edad', 'Género', 'Fecha de inscripción', 
//     'RIC', 'Talleres F5', 'Jornada de puertas abiertas', 'Jornada de selección', 'Decisión'];

//     const allowedMeetingOptions = [1, 3, 4, 5, 6, 13, 14, 15]
//     const allowedTalleresOptions = [1, 3, 4, 7, 8, 13, 14]

    

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await PersonDataService.getAll();
//         setPeople(response.data.data);
//       } catch (error) {
//         console.error('Error al cargar datos de personas', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchRequirements = async () => {
//       try {
//         const requirementsResponse = await PersonRequirementsDataService.getAll();
//         setRequirements(requirementsResponse.data.data);

//         // Inicializar el estado de los requisitos RIC y Talleres F5 de forma independiente
//         const ricStatusObj = {};
//         const talleresStatusObj = {};
//         const jpaStatusObj = {};
//         const jsStatusObj = {};

//         requirementsResponse.data.data.forEach((requirement) => {
//           if (requirement.id_requirement === 2) {
//             ricStatusObj[requirement.id_person] = requirement.id_statusRequirement;
//           } else if (requirement.id_requirement === 3) {
//             talleresStatusObj[requirement.id_person] = requirement.id_statusRequirement;
//           }else if (requirement.id_requirement === 1) {
//             jpaStatusObj[requirement.id_person] = requirement.id_statusRequirement;
//           }else if (requirement.id_requirement === 4) {
//             jsStatusObj[requirement.id_person] = requirement.id_statusRequirement;
//         }
//       }
//         );

//         setRicStatus(ricStatusObj);
//         setTalleresStatus(talleresStatusObj);
//         setJpaStatus(jpaStatusObj);
//         setJsStatus(jsStatusObj);

//       } catch (error) {
//         console.error('Error al cargar datos de requisitos', error);
//       }
//     };

//     fetchRequirements();
//   }, []);

//   const handleRicChange = (personId, newStatus) => {
//     // Actualizar el estado de RIC de forma independiente
//     setRicStatus({
//       ...ricStatus,
//       [personId]: newStatus,
//     });

//     // Actualizar la base de datos automáticamente
//     updateDatabase(personId, newStatus, 2); // 2 es el id_requirement para RIC

    
//   };



//   const handleTalleresChange = (personId, newStatus) => {
//     // Actualizar el estado de Talleres F5 de forma independiente
//     setTalleresStatus({
//       ...talleresStatus,
//       [personId]: newStatus,
//     });

//     // Actualizar la base de datos automáticamente
//     updateDatabase(personId, newStatus, 3); // 3 es el id_requirement para Talleres F5
//   };

//   const handleJpaChange = (personId, newStatus) => {
//     // Actualizar el estado de Talleres F5 de forma independiente
//     setJpaStatus({
//       ...jpaStatus,
//       [personId]: newStatus,
//     });

//     // Actualizar la base de datos automáticamente
//     updateDatabase(personId, newStatus, 1); 
//   };

//   const handleJsChange = (personId, newStatus) => {
    
//     setJsStatus({
//       ...jsStatus,
//       [personId]: newStatus,
//     });

    
//     updateDatabase(personId, newStatus, 4); 
//   };

//   const updateDatabase = async (personId, newStatus, requirementId) => {
//     try {
//       const personRequirement = requirements.find(
//         (requirement) => requirement.id_person === personId && requirement.id_requirement === requirementId
//       );

//       if (personRequirement) {
//         const updatedStatus = { id_statusRequirement: parseInt(newStatus) };
//         await PersonRequirementsDataService.update(
//           personRequirement.id_person,
//           personRequirement.id_requirement,
//           updatedStatus
//         );
//         console.log('Estado actualizado con éxito en la base de datos');
//       }
//     } catch (error) {
//       console.error('Error al actualizar el estado en la base de datos', error);
//     }
//   };

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

//   const meetingStatusOptions = Object.keys (statusOptions)
//   .filter ((key)=>allowedMeetingOptions.includes(parseInt(key)))
//   .map((key)=>(
//     <option key = {key} value={key}>
//       {statusOptions[key]}
//     </option>
//   )
//   )
//   ;

//   const talleresStatusOptions = Object.keys (statusOptions)
//   .filter ((key)=>allowedTalleresOptions.includes(parseInt(key)))
//   .map((key)=>(
//     <option key = {key} value={key}>
//       {statusOptions[key]}
//     </option>
//   )
//   )
//   ;

//   const data = people.map((person) => {
//     const age = person.birthdate ? calculateAge(person.birthdate) : null;
//     const formattedDate = person.created_at ? formatDateString(person.created_at) : null;

//     const ricValue = ricStatus[person.id] || '';
//     const talleresValue = talleresStatus[person.id] || '';
//     const jpaValue = jpaStatus[person.id] || '';
//     const jsValue = jsStatus[person.id] || '';

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
//       RIC: (
//         <select
//           value={ricValue}
//           onChange={(e) => handleRicChange(person.id, e.target.value)}
//         >
          
//               {meetingStatusOptions}
            
//         </select>
//       ),
//       'Talleres F5': (
//         <select
//           value={talleresValue}
//           onChange={(e) => handleTalleresChange(person.id, e.target.value)}
//         >
//           {talleresStatusOptions}
//         </select>
//       ),
//       'Jornada de puertas abiertas':(
//         <select
//         value={jpaValue}
//         onChange={(e) => handleJpaChange(person.id, e.target.value)}
//       >
//         {meetingStatusOptions}
//       </select>

//       ),
//       'Jornada de selección':(
//         <select
//         value={jsValue}
//         onChange={(e) => handleJsChange(person.id, e.target.value)}
//       >
//        {meetingStatusOptions}
//       </select>

//       )

//     };
//   });

//   return (
//     <>
//       <TableAtom tableTitle={'Todas las personas inscritas'} columns={columns} data={data} />
//     </>
//   );
// // }

// import { useState, useEffect } from 'react';
// import TableAtom from '../../components/atoms/TableAtom';
// import PersonDataService from './../../services/crmService/person.service';
// import PersonRequirementsDataService from '../../services/recruitmentService/personRequirements.service';

// export default function IndexPerson() {
//   const [people, setPeople] = useState([]);
//   const [requirements, setRequirements] = useState([]);
//   const [ricStatus, setRicStatus] = useState({});
//   const [talleresStatus, setTalleresStatus] = useState({});
//   const [jpaStatus, setJpaStatus] = useState({});
//   const [jsStatus, setJsStatus] = useState({});

//   const statusOptions = {
//     1: 'En seguimiento',
//     2: 'Segundo formulario completado',
//     3: 'Sin respuesta',
//     4: 'Fuera (duplicado, baja, prueba, error, etc)',
//     5: 'Confirma asistencia',
//     6: 'Asiste',
//     7: 'Ha participado',
//     8: 'No ha participado',
//     9: 'Completos',
//     10: 'No acabados',
//     11: 'Sin comenzar',
//     12: 'Faltan enlaces',
//     13: 'Convocado/a',
//     14: 'Enviar convocatoria',
//     15: 'No enviar convocatoria',
//   };

//   const columns = ['Nombre', 'Apellidos', 'email', 'Teléfono', 'Ciudad', 'Comunidad Autónoma',
//     '¿Acepta la política de protección de datos?', 'Edad', 'Género', 'Fecha de inscripción',
//     'RIC', 'Talleres F5', 'Jornada de puertas abiertas', 'Jornada de selección', 'Decisión'];

//   const allowedMeetingOptions = [1, 3, 4, 5, 6, 13, 14, 15];
//   const allowedTalleresOptions = [1, 3, 4, 7, 8, 13, 14];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await PersonDataService.getAll();
//         setPeople(response.data.data);
//       } catch (error) {
//         console.error('Error al cargar datos de personas', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchRequirements = async () => {
//       try {
//         const requirementsResponse = await PersonRequirementsDataService.getAll();
//         setRequirements(requirementsResponse.data.data);

//         const ricStatusObj = {};
//         const talleresStatusObj = {};
//         const jpaStatusObj = {};
//         const jsStatusObj = {};

//         requirementsResponse.data.data.forEach((requirement) => {
//           if (requirement.id_requirement === 2) {
//             ricStatusObj[requirement.id_person] = requirement.id_statusRequirement;
//           } else if (requirement.id_requirement === 3) {
//             talleresStatusObj[requirement.id_person] = requirement.id_statusRequirement;
//           } else if (requirement.id_requirement === 1) {
//             jpaStatusObj[requirement.id_person] = requirement.id_statusRequirement;
//           } else if (requirement.id_requirement === 4) {
//             jsStatusObj[requirement.id_person] = requirement.id_statusRequirement;
//           }
//         });

//         setRicStatus(ricStatusObj);
//         setTalleresStatus(talleresStatusObj);
//         setJpaStatus(jpaStatusObj);
//         setJsStatus(jsStatusObj);
//       } catch (error) {
//         console.error('Error al cargar datos de requisitos', error);
//       }
//     };

//     fetchRequirements();
//   }, []);

//   const handleCreateNewRecord = async (personId, requirementId, newStatus) => {
//     try {
//       const existingRecord = requirements.find(
//         (requirement) =>
//           requirement.id_person === personId && requirement.id_requirement === requirementId
//       );

//       if (!existingRecord) {
//         const newRecord = {
//           id_person: personId,
//           id_requirement: requirementId,
//           id_statusRequirement: newStatus,
//         };

//         const response = await PersonRequirementsDataService.create(newRecord);

//         console.log('Registro creado con éxito', response.data);
//       } else {
//         console.log('Ya existe un registro para esta persona y requisito.');
//       }
//     } catch (error) {
//       console.error('Error al crear el registro', error);
//     }
//   };

//   const calculateAge = (birthdate) => {
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
//   };

//   const formatDateString = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate().toString().padStart(2, '0');
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const meetingStatusOptions = Object.keys(statusOptions)
//     .filter((key) => allowedMeetingOptions.includes(parseInt(key)))
//     .map((key) => (
//       <option key={key} value={key}>
//         {statusOptions[key]}
//       </option>
//     ));

//   const talleresStatusOptions = Object.keys(statusOptions)
//     .filter((key) => allowedTalleresOptions.includes(parseInt(key)))
//     .map((key) => (
//       <option key={key} value={key}>
//         {statusOptions[key]}
//       </option>
//     ));

//   const data = people.map((person) => {
//     const age = person.birthdate ? calculateAge(person.birthdate) : null;
//     const formattedDate = person.created_at ? formatDateString(person.created_at) : null;

//     const ricValue = ricStatus[person.id] || '';
//     const talleresValue = talleresStatus[person.id] || '';
//     const jpaValue = jpaStatus[person.id] || '';
//     const jsValue = jsStatus[person.id] || '';

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
//       RIC: (
//         <select
//           value={ricValue}
//           onChange={(e) => handleCreateNewRecord(person.id, 2, e.target.value)}
//         >
//           {meetingStatusOptions}
//         </select>
//       ),
//       'Talleres F5': (
//         <select
//           value={talleresValue}
//           onChange={(e) => handleCreateNewRecord(person.id, 3, e.target.value)}
//         >
//           {talleresStatusOptions}
//         </select>
//       ),
//       'Jornada de puertas abiertas': (
//         <select
//           value={jpaValue}
//           onChange={(e) => handleCreateNewRecord(person.id, 1, e.target.value)}
//         >
//           {meetingStatusOptions}
//         </select>
//       ),
//       'Jornada de selección': (
//         <select
//           value={jsValue}
//           onChange={(e) => handleCreateNewRecord(person.id, 4, e.target.value)}
//         >
//           {meetingStatusOptions}
//         </select>
//       ),
//     };
//   });

//   return (
//     <>
//       <TableAtom tableTitle={'Todas las personas inscritas'} columns={columns} data={data} />
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

  const columns = ['Nombre', 'Apellidos', 'email', 'Teléfono', 'Ciudad', 'Comunidad Autónoma',
    '¿Acepta la política de protección de datos?', 'Edad', 'Género', 'Fecha de inscripción',
    'RIC', 'Talleres F5', 'Jornada de puertas abiertas', 'Jornada de selección', 'Decisión'];

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
  
      // Verificar si ya existe un registro para este requisito
      const existingRecord = requirements.find(
        (requirement) =>
          requirement.id_person === personId && requirement.id_requirement === requirementId
      );
  
      if (existingRecord) {
        // Si existe un registro, actualizarlo
        await updateDatabase(existingRecord, newStatus);
      } else {
        // Si no existe un registro, crear uno nuevo
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
    <>
      <TableAtom tableTitle={'Todas las personas inscritas'} columns={columns} data={data} />
    </>
  );
}
