import React, { useState } from 'react';
import TableContentAtom from '../components/atoms/TableContentAtom';

export default function Evaluation() {
  const heads = ["JAVA", "PHP", "LARAVEL", "BBDD", "PHYTON", "JAVASCRIPT", "Java", "pHYTON"];

  // Define el estado para el body, inicializado con los datos iniciales
  const [body, setBody] = useState([
    {
    }
  ]);

  //Función para agregar nuevos datos al body
    const addNewData = () => {
      const newData = {
      };
      // Agrega los nuevos datos al estado
      setBody([...body, newData]);
    };

const saveData = () => {
  const saveData ={
  };
} 

  return (
    <div>
      <TableContentAtom
        date="FECHA"
        captionTittles="Stacks Femcoders Norte"
        theadTittles={heads}
        dateWrite="2023-09-23"
        tableData={body}
        dateEvaluation="2023-03-12"
      ></TableContentAtom>

      <button
       className="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      onClick={addNewData}>
        Agregar nueva evaluación
        </button>
        <button
       className="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
       onClick={saveData}>
        Guardar cambios
        </button>
    </div>
  );
}
import React, { useState } from 'react';
import TableContentAtom from '../components/atoms/TableContentAtom';

export default function Evaluation() {
  const heads = ["JAVA", "PHP", "LARAVEL", "BBDD", "PHYTON", "JAVASCRIPT", "Java", "pHYTON"];

  // Define el estado para el body, inicializado con los datos iniciales
  const [body, setBody] = useState([
    {
    }
  ]);

  //Función para agregar nuevos datos al body
    const addNewData = () => {
      const newData = {
      };
      // Agrega los nuevos datos al estado
      setBody([...body, newData]);
    };

const saveData = () => {
  const saveData ={
  };
} 

  return (
    <div>
      <TableContentAtom
        date="FECHA"
        captionTittles="Stacks Femcoders Norte"
        theadTittles={heads}
        dateWrite="2023-09-23"
        tableData={body}
        dateEvaluation="2023-03-12"
      ></TableContentAtom>

      <button
       className="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      onClick={addNewData}>
        Agregar nueva evaluación
        </button>
        <button
       className="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
       onClick={saveData}>
        Guardar cambios
        </button>
    </div>
  );
}
