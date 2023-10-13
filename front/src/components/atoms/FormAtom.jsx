
// import React, { useState } from 'react';

// export default function FormAtom(props) {
//   const { formTitle, formData, onSubmit } = props;
//   const [values, setValues] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(values); 
//   };

//   return (
//     <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded py-12 pl-64 pb-28
//     ">
//       <form onSubmit={handleSubmit}>
//         <div className="rounded-t mb-0 px-4 py-3 border-0">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full max-w-full flex-grow flex-1">
//               <h3 className="font-semibold text-blueGray-700 text-lg">{formTitle}</h3>
//             </div>
//           </div>
//         </div>
//         <div className="block w-full px-4 py-3">
//           {formData.map((field, index) => (
//             <div className="mb-4" key={index}>
//               <label className="block text-blueGray-600 text-sm font-bold mb-2" htmlFor={field.id}>
//                 {field.label}
//               </label>
//               <input
//                 type={field.type}
//                 id={field.id}
//                 name={field.id}
//                 value={values[field.id] || ''}
//                 onChange={handleChange}
//                 className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
//               />
//             </div>
//           ))}
//           {/* Nuevo campo para Documentos */}
//           <div className="mb-4">
//             <label className="block text-blueGray-600 text-sm font-bold mb-2" htmlFor="document">
//               Documentos
//             </label>
//             <input
//               type="text"
//               id="document"
//               name="document"
//               value={values.document || ''}
//               onChange={handleChange}
//               className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           {/* Nuevo campo para Comentarios */}
//           <div className="mb-4">
//             <label className="block text-blueGray-600 text-sm font-bold mb-2" htmlFor="comment">
//               Comentarios
//             </label>
//             <textarea
//               id="comment"
//               name="comment"
//               value={values.comment || ''}
//               onChange={handleChange}
//               className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-orange-500 text-white active:bg-orange-600 text-xs font-bold uppercase px-3 py-2 rounded-md outline-none focus:outline-none mr-2"
//           >
//             Enviar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// export default function FormAtom(props) {
//   const { formTitle, formData, onSubmit } = props;
//   const [values, setValues] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(values);
//   };

//   return (
//     <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded py-12 pl-64 pb-28">
//       <form onSubmit={handleSubmit}>
//         <div className="rounded-t mb-0 px-4 py-3 border-0">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full max-w-full flex-grow flex-1">
//               <h3 className="font-semibold text-blueGray-700 text-lg">{formTitle}</h3>
//             </div>
//           </div>
//         </div>
//         <div className="block w-full px-4 py-3">
//           {formData.map((field, index) => (
//             <div className="mb-4" key={index}>
//               <label className="block text-blueGray-600 text-sm font-bold mb-2" htmlFor={field.id}>
//                 {field.label}
//               </label>
//               <input
//                 type={field.type}
//                 id={field.id}
//                 name={field.id}
//                 value={values[field.id] || ''}
//                 onChange={handleChange}
//                 className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
//               />
//             </div>
//           ))}
//           <button
//             type="submit"
//             className="bg-orange-500 text-white active-bg-orange-600 text-xs font-bold uppercase px-3 py-2 rounded-md outline-none focus:outline-none mr-2"
//           >
//             Guardar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';

export default function FormAtom(props) {
  const { formTitle, formData, onSubmit } = props;
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values); 
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded py-12 pl-64 pb-28">
      <form onSubmit={handleSubmit}>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="text-blueGray-700 text-xl font-bold">{formTitle}</h6>
            </div>
          </div>
        </div>
        <div className="block w-full px-4 py-3">
          {formData.map((field, index) => (
            <div className="mb-4" key={index}>
              <label className="block uppercase text-blueGray-600 text-md font-bold mb-2" htmlFor={field.id}>
                {field.label}
              </label>
              {field.type === 'select' ? ( 
                <select
                  id={field.id}
                  name={field.id}
                  value={values[field.id] || ''}
                  onChange={handleChange}
                  className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
                >
                  {field.options.map((option, optionIndex) => (
                    <option value={option} key={optionIndex}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={values[field.id] || ''}
                  onChange={handleChange}
                  className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-orange-500 text-white active-bg-orange-600 text-xs font-bold uppercase px-3 py-2 rounded-md outline-none focus:outline-none mr-2"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}



