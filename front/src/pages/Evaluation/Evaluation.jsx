import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TableContentAtom from '../../components/atoms/TableContentAtom';
import TableCompetencesAtom from '../../components/atoms/TableCompetencesAtom';
import skillsService from '../../services/trackingService/skills.service';
import personService from '../../services/crmService/person.service';
import bootcampStackService from '../../services/trackingService/bootcampStack.service';
import CategoryDataService from '../../services/trackingService/category.service'


export default function Evaluation() {
  const {id} = useParams();
  // const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [stacks, setStacks]= useState([]);
  const [categories, setCategories] = useState([]);
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



  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const personResponse = await personService.get(id);
        const personData = personResponse.data;

        setPerson(personData);

        if (personData.bootcamp) {
          const bootcampId = personData.bootcamp.id;
          setBootcampName(personData.bootcamp.name);

          // Obtener los stacks asociados al bootcamp dinámicamente
          const stackResponse = await bootcampStackService.getAll();
          const stackData = stackResponse.data;

          if (Array.isArray(stackData)) {
            const filteredStacks = stackData.filter(
              (stack) => stack.bootcamp_id === bootcampId
            );

            const stackNames = filteredStacks.map(
              (stack) => stack.stacks[0].name
            );

            // Almacenar los nombres de las stacks
            setStacks(stackNames);

            // Obtener todos los datos de skills desde la API
            const skillsResponse = await CategoryDataService.getAll();
            const skillsData = skillsResponse.data;

            if (Array.isArray(skillsData)) {
              // Filtra los skills que están asociados a algún stack en bootcampStack
              const filteredSkills = skillsData.filter((skill) =>
                filteredStacks.some(
                  (stack) => stack.stacks[0].skill_id === skill.id
                )
              );
              console.log(filteredSkills)

              // Almacena las skills asociadas a las stacks
              setCategories(filteredSkills);
            } else {
              console.error('Los datos de la API no contienen información de skills válida.');
            }
          } else {
            console.error('Los datos de la API no contienen información de stacks válida.');
          }
        } else {
          console.error('Los datos de la persona no contienen información de bootcamp.');
        }

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

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
      <p>Coder: {person.name}</p>
    </div>
      <div>
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
      </div>

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
