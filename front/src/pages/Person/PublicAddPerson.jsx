// import { useState } from "react";

// export default function PublicAddPerson() {
//   const [section, setSection] = useState(1);

//   const handleNext = () => {
//     setSection(section + 1);
//   };

//   const handlePrevious = () => {
//     setSection(section - 1);
//   };

//   return (
//     <div className="container mx-auto px-4 h-full">
//       <div className="flex content-center items-center justify-center h-full">
//         <div className="w-full lg:w-6/12 px-4 bg-white">
//           <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
//             <div className="rounded-t mb-0 px-6 py-6">
//               <div className="text-center mb-3">
//                 <h3 className="text-orange-500 text-sm font-bold">
//                   EMPIEZA A ROMPER LOS CÓDIGOS
//                 </h3>
//               </div>
//             </div>
//             <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//               <form>
//                 {/* Sección 1 */}
//                 {section === 1 && (
//                   <div className="section">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="name"
//                     >
//                       NOMBRE
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Nombre"
//                     />

//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="surname"
//                     >
//                       APELLIDOS
//                     </label>
//                     <input
//                       type="text"
//                       id="surname"
//                       name="surname"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Apellidos"
//                     />

//                     <button
//                       className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
//                       type="button"
//                       onClick={handleNext}
//                     >
//                       Siguiente
//                     </button>
//                   </div>
//                 )}

//                 {/* Sección 2 */}
//                 {section === 2 && (
//                   <div className="section">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="email"
//                     >
//                       e-mail
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Email"
//                     />

//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="phone"
//                     >
//                       Teléfono
//                     </label>
//                     <input
//                       type="text"
//                       id="phone"
//                       name="phone"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Teléfono"
//                     />

//                     <button
//                       className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
//                       type="button"
//                       onClick={handlePrevious}
//                     >
//                       Atrás
//                     </button>
//                     <button
//                       className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
//                       type="button"
//                       onClick={handleNext}
//                     >
//                       Siguiente
//                     </button>
//                   </div>
//                 )}

//                 {/* Sección 3 */}
//                 {section === 3 && (
//                   <div className="section">
//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="address"
//                     >
//                       DIRECCIÓN
//                     </label>
//                     <input
//                       type="text"
//                       id="address"
//                       name="address"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Dirección"
//                     />

//                     <label
//                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                       htmlFor="name"
//                     >
//                       NOMBRE
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Nombre"
//                     />

//                     {/* Agrega más campos aquí según tu formulario */}
//                     <button
//                       className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
//                       type="button"
//                       onClick={handlePrevious}
//                     >
//                       Atrás
//                     </button>
//                     <button
//                       className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
//                       type="submit"
//                     >
//                       Inscríbete
//                     </button>
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import {useState} from 'react'
import InputField from '../../components/atoms/InputField';
import NavigationButtons from './NavigationButtons';

export default function PublicAddPerson() {
  const [section, setSection] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    // Agrega más campos aquí según sea necesario
  });

  const handleNext = () => {
    setSection(section + 1);
  };

  const handlePrevious = () => {
    setSection(section - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-6/12 px-4 bg-white">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h3 className="text-orange-500 text-sm font-bold">
                  EMPIEZA A ROMPER LOS CÓDIGOS
                </h3>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                {section === 1 && (
                  <div className="section">
                    <InputField
                      label="NOMBRE"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nombre"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <InputField
                      label="APELLIDOS"
                      id="surname"
                      name="surname"
                      type="text"
                      placeholder="Apellidos"
                      value={formData.surname}
                      onChange={handleChange}
                    />
                    <InputField
                      label="e-mail"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Teléfono"
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <NavigationButtons
                      onPrevious={handlePrevious}
                      onNext={handleNext}
                    />
                  </div>
                )}

                {section === 2 && (
                  <div className="section">
                    <InputField
                      label="DIRECCIÓN"
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Dirección"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    {/* Agrega más campos aquí según sea necesario */}
                    <NavigationButtons
                      onPrevious={handlePrevious}
                      onNext={handleNext}
                    />
                  </div>
                )}

                {/* Agrega más secciones según sea necesario */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

