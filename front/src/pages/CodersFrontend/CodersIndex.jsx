// import APIservice from "../../services/APIservice"
import TableAtom from '../../components/atoms/TableAtom'

export default function CodersIndex() {



    const data =[
        {name: 'Lola',
        surname: 'Lolita linda',
        email: 'lola@gmail.com',
        phone: '654 321 897',
        address: 'C/Flores, nº3, 2ºD',
        city: 'Langreo',
        region: 'Asturias',
        birthdate: '27/12/1987',
        dataprotection: 'Sí',
        gender: 'Femenino',
        dni: '93452312-Z',
        id_status: 'Coder',
        id_bootcamp: 'Digital Academy'  
        }
      ];
    
      const columns =[
        'Nombre',
        'Apellidos',
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
      ]

    return (
        <div className='md:block md:fixed md:top-16 md:left-64 md:right-0 w-auto p-2'>
            <TableAtom tableTitle='Coders' data={data} columns={columns} addbutton='Coders' addlink='/tracking/coders/add'></TableAtom>
        </div>
    )
}