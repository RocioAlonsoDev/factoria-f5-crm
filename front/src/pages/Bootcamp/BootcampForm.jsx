// import FormAtom from '../../components/atoms/FormAtom'
// import APIservice from '../../services/APIservice';

import { useState } from 'react';
// import { useEffect } from 'react';
import StepperMolecule from '../../components/molecules/StepperMolecule'



export default function BootcampForm() {
//   // const navigate = useNavigate()
//   // const [error, setError] = useState("");



//   const [bootcamp, setBootcamp] = useState({
//     name: '',
//     school: '',
//     promo: '',
//     description: '',
//     start_date: '',
//     end_date: '',
//   })

//   


//   const createBootcamp = (values) => {

    

    
//   }

  // useEffect(() => {
  //   if(id){
  //     APIservice.get(`/bootcamp/${id}`)
  //     .then(({ data }) => {
  //       setBootcamp(data.data);
  //       console.log(data.data)
  //     })
  //   }
  // },[id])


  return (
    <div className="md:block md:absolute md:top-[107px] md:left-64 md:right-0 w-auto p-2">
      <StepperMolecule 
      // step1={
      //   
      // }
      // step2={
      //   <FormAtom
      //       formTitle="Añadir Stacks"
      //       formData={formData}
      //       onSubmit={step1}
      //     />
      // }
      // step3={
      //   <FormAtom
      //       formTitle="Añadir Requisitos"
      //       formData={formData}
      //       onSubmit={step1}
      //     />
      // }
      >
      </StepperMolecule>
         
    </div>
  )
}
