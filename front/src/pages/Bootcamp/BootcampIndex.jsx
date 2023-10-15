import BootcampDataService from '../../services/crmService/bootcamp.service';
import TableAtom from '../../components/atoms/TableAtom'
import { useState , useEffect } from "react";
import ButtonAtom from "../../components/atoms/ButtonAtom";

export default function BootcampIndex() {

    const data =[
        {name: 'Femcoders Norte',
        school: 'Langreo, Asturias',
        promo: 'P3',
        start_date: '27-03-2024',
        end_date: 'FemNorte',
        Asistencia: 'Convocada',}
      ];
    
      const columns =[
        'bootcamps',
        'escuela',
        'promocion',
        'fecha de inicio',
        'fecha de fin',
        'estado'
      ]

  return (
      <div className='md:block md:absolute md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
          <TableAtom tableTitle='Bootcamps' data={data} columns={columns} addbutton='+ crear nuevo bootcamp' addlink='/tracking/bootcamp/add'></TableAtom>
          {isLoading && <div className='relative flex flex-col ml-3 mb-6'>Cargando...</div>}
      </div>
  )
}
