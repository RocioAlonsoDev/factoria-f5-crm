import PersonDataService from '../../services/crmService/person.service';
import TableAtom from '../../components/atoms/TableAtom'
import { useState , useEffect } from "react";
import ButtonAtom from "../../components/atoms/ButtonAtom";

export default function CodersIndex() {
  
  const [coders, setCoders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    PersonDataService.getAll()
      .then(({ data }) => {
        const filteredCoders = data.data.filter(coder => coder.id_status === 4);
        setCoders(filteredCoders);
        setIsLoading(false);
      })
  }, []); 


 
  const data = coders.map((coder) => ({
    'Nombre': coder.name,
    'Apellido': coder.surname,
    'Correo Electrónico': coder.email,
    'Teléfono': coder.phone,
    'Dirección': coder.address,
    'Ciudad': coder.city,
    'Comunidad Autonoma': coder.region,                
    'Protección de datos': coder.dataprotection,
    'Fecha de nacimiento': coder.birthdate,
    'Género': coder.gender,
    'DNI': coder.dni,
    'Status': coder.status.name,
    'Bootcamp': coder.bootcamp.name,
    
    '' : (<>
    <ButtonAtom addlink={`/tracking/coders/${coder.id}`} addbutton='Ver'></ButtonAtom>
    <ButtonAtom addlink={`/tracking/coders/update/${coder.id}`} addbutton='Editar'></ButtonAtom>
    </>)
  }));

  const columns = [
    'Nombre', 
    'Apellido', 
    'Correo Electrónico', 
    'Teléfono', 
    'Dirección',  
    'Ciudad', 
    'Comunidad Autonoma',  
    'Protección de datos',
    'Fecha de nacimiento',
    'Género', 
    'DNI',
    'Status',
    'Bootcamp',
    ''
    ];

  return (
      <div className='md:block md:absolute md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
          <TableAtom tableTitle='Coders' data={data} columns={columns} ></TableAtom>
          {isLoading && <div className='relative flex flex-col ml-3 mb-6'>Cargando...</div>}
      </div>
  )
}
