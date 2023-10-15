import FormAtom from '../../components/atoms/FormAtom'
import APIservice from '../../services/APIservice';
import { useNavigate , useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import StepperAtom from '../../components/atoms/StepperAtom'

const formData = [
    {
      id: 'name', 
      label: 'Nombre del bootcamp',
      type: 'text', 
    },
    {
      id: 'school', 
      label: 'Escuela', 
      type: 'text', 
    },
    {
       id: 'promo', 
       label: 'Promoción', 
       type: 'text', 
    },
    {
      id: 'description', 
      label: 'Descripción', 
      type: 'text', 
   },
   {
    id: 'startDate', 
    label: 'Fecha de inicio', 
    type: 'date', 
    },
    {
      id: 'endDate', 
      label: 'Fecha de finalización', 
      type: 'date', 
      },

  ];

export default function BootcampAdd() {
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const { id } = useParams();


  const [bootcamp, setBootcamp] = useState({
    name: '',
    school: '',
    promo: '',
    description: '',
    start_date: '',
    end_date: '',
  })

  const createBootcamp = (values) => {

    let res= null;

    if(id){
      res = APIservice.put(`/bootcamp/${id}`, values)
    }else{
      res = APIservice.post('/bootcamp', values)
    }

    res
    .then(() => {
      navigate('/tracking/bootcamp')
    })
    .catch(err=> {
      if (err && err.response) {
        setError(err.response.data);
      }
    })
  }

  useEffect(() => {
    if(id){
      APIservice.get(`/bootcamp/${id}`)
      .then(({ data }) => {
        setBootcamp(data.data);
        console.log(data.data)
      })
    }
  },[id])


  return (
    <div className="md:block md:fixed md:top-16 md:left-64 md:right-0 w-auto p-2">
      <StepperAtom>
        <FormAtom
            formTitle="Crear nuevo Bootcamp"
            formData={formData}
            onSubmit={createBootcamp}
          />
      </StepperAtom>
         
    </div>
  )
}
