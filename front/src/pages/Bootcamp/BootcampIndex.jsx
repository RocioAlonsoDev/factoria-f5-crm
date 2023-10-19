import APIservice from "../../services/APIservice"
import TableAtom from '../../components/atoms/TableAtom'
import { useState , useEffect } from "react";
import ButtonAtom from "../../components/atoms/ButtonAtom";

export default function BootcampIndex() {
  
  const [bootcamps, setBootcamps] = useState([]);
  const [currentUserDate, setCurrentUserDate] = useState(new Date()); 
    
    useEffect(() => {
        APIservice.get('/bootcamp')
        .then(({ data }) => {
           setBootcamps(data.data);
          console.log(data.data)
        })
      },[])

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const newDate = new Date(date).toLocaleDateString(undefined, options);
    return newDate
  }

      
      
      const checkStatus = (start,end) => {
        console.log(currentUserDate)
        console.log(start)
        console.log(end)
        if(currentUserDate<start){
          return <div className='text-green-600'>SELECCIÓN ABIERTA</div>
        }else if(currentUserDate>=start && currentUserDate<end){
          return <div className='text-blue-600'>EN CURSO</div>
        }else{
          return <div className='text-red-600'>FINALIZADO</div>
        }
      }

      const data = bootcamps.map((bootcamp) => ({
        'Bootcamp': bootcamp.name,
        'Escuela': bootcamp.school,
        'Promoción': bootcamp.promo,
        'Fecha de Inicio': formatDate(bootcamp.startDate),
        'Fecha de Fin': formatDate(bootcamp.endDate),
        'Status' : checkStatus(new Date(bootcamp.startDate),new Date(bootcamp.endDate)),
        '' : (<ButtonAtom addlink={`/tracking/bootcamp/${bootcamp.id}`} addbutton='Ver más >'></ButtonAtom>)
      }));

      

    
      const columns = ['Bootcamp', 'Escuela', 'Promoción', 'Fecha de Inicio', 'Fecha de Fin', 'Status', ''];


    return (
        <div className='md:block md:absolute md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
            <TableAtom tableTitle='Bootcamps' data={data} columns={columns} addbutton='+ crear nuevo bootcamp' addlink='/tracking/bootcamp/add'></TableAtom>
        </div>
    )
}
