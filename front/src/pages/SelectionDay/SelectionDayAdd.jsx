import FormAtom from '../../components/atoms/FormAtom'
import SelectionDayDataService from './../../services/recruitmentService/selectionDay.service'


function SelectionDayAdd() {
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
