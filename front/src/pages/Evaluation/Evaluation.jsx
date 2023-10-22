import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TableContentAtom from '../../components/atoms/TableContentAtom';
import TableCompetencesAtom from '../../components/atoms/TableCompetencesAtom';
import CategoryDataService from '../../services/trackingService/category.service';
import BootcampStackDataService from '../../services/trackingService/bootcampStack.service';
import personService from '../../services/crmService/person.service';
import bootcampStackService from '../../services/trackingService/bootcampStack.service';


export default function Evaluation() {
  const {id} = useParams();
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [stacks, setStacks]= useState([]);
  const [person, setPerson] = useState([]);
  const [bootcampName, setBootcampName] = useState('');

  // useEffect(() => {
  //   const fetchCategory = async () => {
  //     try {
  //       const response = await CategoryDataService.getAll();
      
  //       setCategories(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading(false); 
  //     }
  //   };

  //   fetchCategory();
  // }, []);


  // useEffect(() => {
  //   const fetchStack = async () => {
  //     try {
  //       const response = await BootcampStackDataService.get(id);
  //       setStacks(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchStack();
  // }, []);

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        // Realiza una solicitud a la API para obtener los detalles de la persona
        const response = await personService.get(id);
        console.log('Respuesta de la API:', response.data);
        const personData = response.data;

        // Establece los detalles de la persona en el estado
        setPerson(personData);

        if (personData && personData.bootcamp) {
          // Establece los detalles de la persona en el estado
          setPerson(personData);

          // Accede al nombre del bootcamp desde personData.bootcamp.name
          const bootcampName = personData.bootcamp.name;
          setBootcampName(bootcampName);
        } else {
          console.error('Los datos de la persona no contienen información de bootcamp.');
        }
        setIsLoading(false);
      } catch (error) {
        console.error( error);
        setIsLoading(false);
      }
    };

    fetchPersonDetails();
  }, [id]);


useEffect(() => {
  const fetchStack = async () => {
    try {
      const response = await BootcampStackDataService.getAll();

      setStacks(response.data);
      setIsLoading(false);
    } catch (error){
      console.log(error);
      setIsLoading(false);
    }
  };
  fetchStack();
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
      <h1>Formulario de Evaluación</h1>
      <p>Persona: {person.name}</p>
    </div>
      {/* <div>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <div>
            <TableCompetencesAtom
              captionTittles="Evolución de competencias()"
              categories={categories}
            />
          </div>
        )}
      </div> */}

      <div>
        <TableContentAtom
          date="FECHA"
          captionTittles={bootcampName}
          stacks={stacks}
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
