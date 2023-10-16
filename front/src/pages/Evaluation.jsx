import React, { useState } from 'react';
import TableContentAtom from '../components/atoms/TableContentAtom';
import TableCompetencesAtom from '../components/atoms/TableCompetencesAtom';


export default function Evaluation() {


  //COMPETENSES TABLE
  const mockData = {
    tittlesCompetence: ["Competencia 1", "Competencia 2", "Competencia 3"],
    contents: [
      {
          fecha: '2023-10-13',
          tipo: 'Tipo 1',
          values: ['Valor 1', 'Valor 2']
      },
      {
          fecha: '2023-10-14',
          tipo: 'Tipo 2',
          values: ['Valor 3', 'Valor 4']
      }
  ]
};


  //CONTENTES TABLE
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
    <div className='md:block md:fixed md:top-16 md:left-64 md:right-0 w-auto p-2'>
      <div>
        <TableCompetencesAtom
          captionTittles="Evolución de competencias()"
          tittlesCompetence={mockData.tittlesCompetence}
          contents={mockData.contents}

        ></TableCompetencesAtom>
      </div>
      <div >
        <TableContentAtom
          date="FECHA"
          captionTittles="Stacks Femcoders Norte"
          theadTittles={heads}
          dateWrite="2023-09-23"
          tableData={body}
          dateEvaluation="2023-03-12"
        ></TableContentAtom>
      </div>
      <div>
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
    </div>
  );
}
