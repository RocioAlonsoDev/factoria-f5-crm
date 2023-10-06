import FormAtom from '../../components/atoms/FormAtom'
import SelectionDayDataService from './../../services/recruitmentService/selectionDay.service'
import {useNavigate} from 'react-router-dom';


function SelectionDayAdd() {
  const navigate = useNavigate();
  const formData = [
    {
      id: 'school', 
      label: 'Nombre de la escuela', 
      type: 'text', 
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

  ];

  const handleSubmit = (values) => {
    
    SelectionDayDataService.create(values)
      .then((response) => {
        console.log('Respuesta:', response.data);
        alert ('La jornada de selección se ha añadido correctamente');
        navigate ('/recruitment/selectionDay');
        
      })
      .catch((error) => {
        console.error('Error al enviar los datos:', error);
      });
  };

 


  return (
   
    <FormAtom
    formTitle="Formulario de Jornada"
    formData={formData}
    onSubmit={handleSubmit}
  />
  )
}

export default SelectionDayAdd
