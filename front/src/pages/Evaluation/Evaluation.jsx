import { useState, useEffect } from 'react';
import TableContentAtom from '../../components/atoms/TableContentAtom';
import TableCompetencesAtom from '../../components/atoms/TableCompetencesAtom';
import CategoryDataService from '../../services/trackingService/category.service';

export default function Evaluation() {
  const [categories, setCategories] = useState([]);
  const [tittlesCompetence, setTittlesCompetence] = useState([]); // Define tittlesCompetence antes de usarlo
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CategoryDataService.getAll()
      .then(({ data }) => {
        console.log(data)
        // Reformatea los datos de la API
        const formattedData = data.map((category) => ({
          fecha: '', // Establece la fecha según tus necesidades
          tipo: '',  // Establece el tipo según tus necesidades
          competences: {
            [category.name]: category.skills.map((skill) => skill.name),
          },
        }));
  
        setCategories(formattedData);
        setTittlesCompetence(data.map((category) => category.name)); // Define tittlesCompetence aquí
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar los datos de la API:', error);
        setIsLoading(false);
      });
  }, []);
  
  const heads = ["Fecha", "Tipo", ...tittlesCompetence]; // Ahora tittlesCompetence está definido
  
  // Estado para controlar si los selectores deben mostrarse
  const [showSelects, setShowSelects] = useState(false);

  // Estado para los datos de competencias
  const [bodyContent, setBodyContent] = useState([]);

  const addNewData = () => {
    const newContentData = {
      fecha: '', // Establece la fecha según tus necesidades
      tipo: '', // Establece el tipo según tus necesidades
      competences: new Array(tittlesCompetence.length).fill('-'),
    };

    // Agrega la nueva fila al estado
    setBodyContent([...bodyContent, newContentData]);
    // Activa los selectores al agregar una nueva fila
    setShowSelects(true);
  };

  const saveData = () => {
    // Aquí puedes guardar los datos según sea necesario
  };

  return (
    <div className='md:block md:absolute md:top-16 md:left-64 md:right-0 w-auto p-2'>
      <div>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <div>
            <TableCompetencesAtom
              captionTittles="Evolución de competencias()"
              contents={categories} // Cambia bodyContent a categories para mostrar los datos de la API
              showSelects={showSelects}
              tittlesCompetence={tittlesCompetence}
            />
          </div>
        )}
      </div>

      <div>
        <TableContentAtom
          date="FECHA"
          captionTittles="Stacks Femcoders Norte"
          theadTittles={heads}
          dateWrite="2023-09-23"
          tableData={bodyContent} // Pasa el estado como prop
          dateEvaluation="2023-03-12"
          showSelects={showSelects} // Pasa el estado como prop
        ></TableContentAtom>
      </div>
      <div>
        <button
          className="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={addNewData}
        >
          Agregar nueva evaluación
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
