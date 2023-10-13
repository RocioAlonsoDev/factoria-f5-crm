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
    onSubmit(values); // Envía los valores a la función onSubmit proporcionada
  };

  return (

    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <form onSubmit={handleSubmit}>
      <div className="rounded-t mb-0 px-4 py-8 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-1 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-blueGray-700 text-2xl">{formTitle}</h3>
          </div>
        </div>
      </div>
      <div className="block w-full px-4 py-3">
        {formData.map((field, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-blueGray-600 text-sm font-bold mb-2" htmlFor={field.id}>
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={values[field.id] || ''}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-orange-500 text-white active:bg-orange-600 text-xs font-bold uppercase px-3 py-2 rounded-md outline-none focus:outline-none mr-2"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
);
}
