import FormAtom from '../../components/atoms/FormAtom'

const formData = [
    {
      id: 'nombreJornada', 
      label: 'Nombre de la escuela', 
      type: 'text', 
    },
    {
      id: 'fecha', 
      label: 'Fecha', 
      type: 'date', 
    },
    {
       id: 'link', 
       label: 'Link del zoom', 
       type: 'text', 
      },

  ];

function SelectionDayAdd() {


  return (
   
    <FormAtom
    formTitle="Formulario de Jornada"
    formData={formData}
     onSubmit={(values) => {
        //aquí tengo que meter los datos para enviar
    console.log('Valores del formulario:', values);
  }}
    />
  )
}

export default SelectionDayAdd
