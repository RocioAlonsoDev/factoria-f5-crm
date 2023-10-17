
import FormAtom from '../../components/atoms/FormAtom';
import SelectionDayDataService from './../../services/recruitmentService/selectionDay.service';
import { useNavigate } from 'react-router-dom';


function SelectionDayAdd() {
  const navigate = useNavigate();
  const formData = [
    {
      id: 'school',
      label: 'Escuela',
      type: 'select',
      options: ['Selecciona', 'Cataluña', 'Madrid', 'Asturias'],
    },
    {
      id: 'date',
      label: 'Fecha',
      type: 'date',
    },
    {
      id: 'link',
      label: 'Link del zoom',
      type: 'text',
    },
    {
      id: 'comment',
      label: 'Comentarios',
      type: 'text',
    },
    {
      id: 'document',
      label: 'Documentos',
      type: 'text',
    },
  ];
  

  

  const handleSubmit = (values) => {
    SelectionDayDataService.create(values)
      .then((response) => {
        console.log('Respuesta:', response.data);
        alert('La jornada de selección se ha añadido correctamente');
        navigate('/recruitment/selectionDay');
      })
      .catch((error) => {
        console.error('Error al enviar los datos:', error);
      });
  };
  
  return (
    <div className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
      
      
      <FormAtom
        formTitle="Formulario de Jornada"
        formData={formData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default SelectionDayAdd;
