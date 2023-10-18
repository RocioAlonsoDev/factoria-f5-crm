import { useState } from "react";
import APIservice from "../../services/APIservice";
import TableAtom from '../../components/atoms/TableAtom'

export default function CodersIndex() {

    const [data, setData]= useState([]);
    
        const columns =[
        'name',
        'surname',
        'Email',
        'Teléfono',
        'Dirección',
        'Ciudad',
        'Provincia',
        'Fecha de nacimiento',
        'Protección de datos',
        'Género',
        'DNI',
        'Status',
        'Bootcamp'
      ];

      APIservice.get('/person')
  .then(response => {
    const coders = response.data.data.filter(person => person.id_status === 3); // Asumiendo que el ID de "Coder" es 2
    setData(coders); 
  })
  .catch(error => console.error('Error:', error));

      
    return (
        <div className='md:block md:fixed md:top-16 md:left-64 md:right-0 w-auto p-2'>
            <TableAtom tableTitle='Coders' data={data} columns={columns} addbutton='Coders' addlink='/tracking/coders/add'></TableAtom>
        </div>
    )
}