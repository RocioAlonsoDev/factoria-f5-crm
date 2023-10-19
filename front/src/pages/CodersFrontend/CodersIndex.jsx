import { useState, useEffect } from "react";
import APIservice from "../../services/APIservice";
import TableAtom from '../../components/atoms/TableAtom';

export default function CodersIndex() {
    const [data, setData] = useState([]);

    useEffect(() => {
        APIservice.get('/person')
            .then(response => {
                const coders = response.data.data.filter(person => person.id_status === 4);
                const transformedData = coders.map(coder => ({
                    Nombre: coder.name,
                    Apellido: coder.surname,
                    "Correo Electrónico": coder.email,
                    Foto: coder.image,
                    Teléfono: coder.phone,
                    Dirección: coder.address,
                    Ciudad: coder.city,
                    "Comunidad Autonoma": coder.region,                
                    "Protección de datos": coder.dataprotection,
                    "Fecha de nacimiento": coder.birthdate,
                    Género: coder.gender,
                    DNI: coder.dni,
                    Status: coder.status.name,
                    Bootcamp: coder.bootcamp.name
                }));
                setData(transformedData); 
            })
            .catch(error => console.error('Error:', error));
    }, []); // Agregué un arreglo vacío para que el efecto se ejecute solo una vez al montar el componente

    return (
        <div className='md:block md:absolute md:top-16 md:left-64 md:right-0 w-auto p-2'>
            {data.length > 0 && (
                <TableAtom 
                    tableTitle='Coders' 
                    data={data} 
                    columns={Object.keys(data[0])} 
                    addbutton='Coders' 
                    addlink='/tracking/coders/add'
                />
            )}
        </div>
    );
}
