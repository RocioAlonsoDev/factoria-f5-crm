import React, { useEffect } from "react";
//import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { useParams } from 'react-router-dom';
import FormAtom from '../../components/atoms/FormAtom'
import bootcampService from "../../services/crmService/bootcamp.service";
import stackService from "../../services/trackingService/stack.service";
 
// export default function StepperMolecule (props) {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [isLastStep, setIsLastStep] = React.useState(false);
//   const [isFirstStep, setIsFirstStep] = React.useState(false);
//   const [stacks,setStacks] = React.useState([]);
//   const { id } = useParams();
 
//   const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
//   const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

//   const step1Data = [
//       {
//         id: 'name', 
//         label: 'Nombre del bootcamp',
//         type: 'text', 
//       },
//       {
//         id: 'school', 
//         label: 'Escuela', 
//         type: 'select',
//         options: ['Selecciona', 'Cataluña', 'Madrid', 'Asturias'],
//       },
//       {
//         id: 'promo', 
//         label: 'Promoción', 
//         type: 'text', 
//       },
//       {
//         id: 'description', 
//         label: 'Descripción', 
//         type: 'text', 
//     },
//     {
//       id: 'startDate', 
//       label: 'Fecha de inicio', 
//       type: 'date', 
//       },
//       {
//         id: 'endDate', 
//         label: 'Fecha de finalización', 
//         type: 'date', 
//         },
//   ];

  
//   const storeDataInLocalStorage = (key, data) => {
//     localStorage.setItem(key, JSON.stringify(stacks));
//   };
  
//   // Function to retrieve data from local storage
//   const retrieveDataFromLocalStorage = (key) => {
//     const storedData = localStorage.getItem(key);
//     return storedData ? JSON.parse(storedData) : null;
//   };
  
//   // Example: Storing the "stacks" data in local storage
//   const stacksData = [/* Your stack data */];
//   storeDataInLocalStorage('stacksData', stacksData);

//   useEffect(() => {
//     stackService.getAll()
//     .then((res)=>{
//       setStacks(res.data)
//     })
//     .catch(err => console.log(err))
//   },[])
    
//   let step2Data = stacks.map(stack => ({
//     id: stack.id,
//     label: stack.name,
//     type: 'checkbox',
//   }));

//   const step1 = (values) => {
//     let res= null;
//     if(id){
//       console.log(values)
//     }else{
//       res = bootcampService.create(values)
//     }
//     res
//     .then(() => {
//       handleNext()
//     })
//     .catch(err=> {
//       if (err && err.response) {
//         console.log(err.response)
//       }
//     })
//   }

//   const step2 = (values) => {
//     let res= null;
//     if(id){
//       console.log(values)
//     }else{
//       res = bootcampService.create(values)
//     }
//     res
//     .then(() => {
//       handleNext()
//     })
//     .catch(err=> {
//       if (err && err.response) {
//         console.log(err.response)
//       }
//     })
//   }
 
//   return (
//     <div className="flex flex-col relative min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded py-10">
//       <Stepper
//         activeStep={activeStep}
//         isLastStep={(value) => setIsLastStep(value)}
//         isFirstStep={(value) => setIsFirstStep(value)}
//         className=" flex flex-row justify-evenly mb-24"
//       >
//         <Step className="flex flex-col items-center">
//           <div>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className={activeStep === 0 ? "w-10 h-10 p-2 text-white bg-orange-500 rounded-full" : "w-10 h-10 p-2 text-white bg-gray-300 rounded-full"}>
//                 <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
//                 <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
//                 <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
//               </svg>
//           </div>
          
//           <div className="  w-max text-center ">
//             <Typography
//               variant="h5"
//               className={activeStep === 0 ? "text-2xl  text-gray-700" : "text-gray-400"}
//             >
//               Paso 1
//             </Typography>
//             <Typography
//               className={activeStep === 0 ? "text-xl font-normal text-gray-700" : "font-normal text-gray-400"}
//             >
//               Bootcamp
//             </Typography>
//           </div>
//         </Step>
//         <Step className="flex flex-col items-center">
//           <div>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={activeStep === 1 ? "w-10 h-10 p-2 text-white bg-orange-500 rounded-full" : "w-10 h-10 p-2 text-white bg-gray-300 rounded-full"}>
//               <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
//             </svg>
//           </div>
          

//           <div className="w-max text-center">
//             <Typography
//               variant="h5"
//               className={activeStep === 1 ? "text-2xl  text-gray-700" : "text-gray-400"}
//             >
//               Paso 2
//             </Typography>
//             <Typography
//               className={activeStep === 1 ? "text-xl font-normal text-gray-700" : "font-normal text-gray-400"}
//             >
//               Stacks
//             </Typography>
//           </div>
//         </Step>
//         <Step className="flex flex-col items-center">
//           <div>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={activeStep === 2 ? "w-10 h-10 p-2 text-white bg-orange-500 rounded-full" : "w-10 h-10 p-2 text-white bg-gray-300 rounded-full"}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
//             </svg>
//           </div>

//           <div className="  w-max text-center">
//             <Typography
//               variant="h5"
//               className={activeStep === 2 ? "text-2xl  text-gray-700" : "text-gray-400"}
//             >
//               Paso 3
//             </Typography>
//             <Typography
//               className={activeStep === 2 ? "text-xl font-normal text-gray-700" : "font-normal text-gray-400"}
//             >
//               Requisitos
//             </Typography>
//           </div>
//         </Step>
//       </Stepper>

      
//       {activeStep === 0 ? 
//         <FormAtom
//           formTitle="Crear nuevo Bootcamp"
//           formData={step1Data}
//           onSubmit={step1}
//         /> : ''}
//       {activeStep === 1 ? 
//         <FormAtom
//           formTitle="Agregar Stacks"
//           formData={step2Data}
//           onSubmit={step2}
//         /> : ''}
//       {activeStep === 2 ? props.step3 : ''}
//       <div className="mt-32">
//         <Button onClick={handlePrev} disabled={isFirstStep} className="bg-gray-400">
//           Atrás
//         </Button>
//         <Button onClick={handleNext} disabled={isLastStep} className="bg-gray-400">
//           Siguiente
//         </Button>
//       </div>
//     </div>
//   );
// }