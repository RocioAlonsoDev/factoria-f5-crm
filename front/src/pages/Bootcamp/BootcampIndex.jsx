import APIservice from "../../services/APIservice"
import TableAtom from '../../components/atoms/TableAtom'
import { useState , useEffect } from "react";

export default function BootcampIndex() {

  const [bootcamps, setBootcamps] = useState([]);  
    
    useEffect(() => {
        APIservice.get('/bootcamp')
        .then(({ data }) => {
          setBootcamps(data.data);
          console.log(data.data)
        })
      },[])
  

      const columns =[
        'id',
        'name',
        'promo',
        'school',
        'startDate',
        'endDate'
      ]

    return (
        <div className='md:block md:fixed md:top-24 md:left-64 md:right-0 w-auto p-2'>
            <TableAtom tableTitle='Bootcamps' data={bootcamps} columns={columns} addbutton='bootcamp' addlink='/tracking/bootcamp/add'></TableAtom>
        </div>
    )
}
