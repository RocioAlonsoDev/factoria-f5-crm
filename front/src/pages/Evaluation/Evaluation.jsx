import { useState, useEffect } from 'react';
import TableContentAtom from '../../components/atoms/TableContentAtom';
import TableCompetencesAtom from '../../components/atoms/TableCompetencesAtom';
import CategoryDataService from '../../services/trackingService/category.service';

export default function Evaluation() {
  const [categories, setCategories] = useState([]); // Inicializa categories como una matriz vacía
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await CategoryDataService.getAll();
        // Configura el estado categories con los datos de la API
        setCategories(response.data);
        setIsLoading(false); // Establece isLoading en false una vez que se han cargado los datos
      } catch (error) {
        console.log(error);
        setIsLoading(false); // Asegúrate de manejar el error adecuadamente
      }
    };

    // Llama a la función para cargar los datos de la API
    fetchCategory();
  }, []);

  // Estado para controlar si los selectores deben mostrarse
  const [showSelects, setShowSelects] = useState(false);

  // Estado para los datos de competencias
  const [bodyContent, setBodyContent] = useState([]);

  const addNewData = () => {
    const newContentData = {
      fecha: '', // Establece la fecha según tus necesidades
      tipo: '', // Establece el tipo según tus necesidades
      competences: new Array(categories.length).fill('-'), // Usa categories en lugar de tittlesCompetence
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
              categories={categories} // Pasa las categorías como prop
            />
          </div>
        )}
      </div>

      <div>
        <TableContentAtom
          date="FECHA"
          captionTittles="Stacks Femcoders Norte"
          // theadTittles={heads}
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
