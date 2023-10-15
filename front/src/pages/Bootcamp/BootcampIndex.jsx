// import APIservice from "../../services/APIservice"
import TableAtom from '../../components/atoms/TableAtom'

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
        <div className='md:block md:fixed md:top-16 md:left-64 md:right-0 w-auto p-2'>
            <TableAtom tableTitle='Bootcamps' data={data} columns={columns} addbutton='bootcamp' addlink='/tracking/bootcamp/add'></TableAtom>
        </div>
    )
}
