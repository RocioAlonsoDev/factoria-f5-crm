import React, { useState } from 'react';
import TableContentAtom from '../components/atoms/TableContentAtom';
import TableCompetencesAtom from '../components/atoms/TableCompetencesAtom';

export default function Evaluation() {
  // COMPETENSES TABLE
  const mockData = {
    tittlesCompetence: ["Competencia 1", "Competencia 2", "Competencia 3"],
    contents: [
      {
        competences: {
          "Competencia 1": ['Contenido 1.1', 'Contenido 1.2'],
          "Competencia 2": ['Contenido 2', 'contenido 2.2'],
          "Competencia 3": ['Contenido 3.1', 'Contenido 3.2', 'Contenido 3.3', 'contenido cuatro él o ella han aprendido a buscar en chatGPT']
        }
      },
      // ... (otros registros) 
    ]
  };

  // HEADERS FOR CONTENT TABLE
  const heads = ["JAVA", "PHP", "LARAVEL", "BBDD", "PHYTON", "JAVASCRIPT", "Java", "pHYTON"];

  // Define el estado para el body, inicializado con un arreglo vacío
  const [body, setBody] = useState([]);

  // Estado para controlar si los selectores deben mostrarse
  const [showSelects, setShowSelects] = useState(false);

  // Función para agregar una nueva fila al body
  const addNewData = () => {
    const newData = {};
    // Agrega la nueva fila al estado
    setBody([...body, newData]);
    // Activa los selectores al agregar una nueva fila
    setShowSelects(true);
  };

  const saveData = () => {
    // Aquí puedes guardar los datos según sea necesario
  };

  return (
    <div className='md:block md:fixed md:top-16 md:left-64 md:right-0 w-auto p-2'>
      <div>
        <TableCompetencesAtom
          captionTittles="Evolución de competencias()"
          tittlesCompetence={mockData.tittlesCompetence}
          contents={mockData.contents}
        ></TableCompetencesAtom>
      </div>
      <div>
        <TableContentAtom
          date="FECHA"
          captionTittles="Stacks Femcoders Norte"
          theadTittles={heads}
          dateWrite="2023-09-23"
          tableData={body}
          dateEvaluation="2023-03-12"
          showSelects={showSelects} // Pasa el estado como prop
        ></TableContentAtom>
      </div>
      <div>
        <button
          className="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={addNewData}
        >
          Agregar nuevos niveles
        </button>
        <button
          className="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={saveData}
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
}
