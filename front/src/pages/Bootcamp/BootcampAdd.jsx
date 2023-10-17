import FormAtom from '../../components/atoms/FormAtom'

const formData = [
    {
      id: 'name', 
      label: 'Nombre del bootcamp', 
      type: 'text', 
    },
    {
      id: 'school', 
      label: 'Escuela', 
      type: 'text', 
    },
    {
       id: 'promo', 
       label: 'Promoción', 
       type: 'text', 
    },
    {
      id: 'description', 
      label: 'Descripción', 
      type: 'text', 
   },
   {
    id: 'start_date', 
    label: 'Fecha de inicio', 
    type: 'date', 
    },
    {
      id: 'end_date', 
      label: 'Fecha de finalización', 
      type: 'date', 
      },

  ];

export default function BootcampAdd() {
  return (
    <div className="md:block md:fixed md:top-16 md:left-64 md:right-0 w-auto p-2">
         <FormAtom
            formTitle="Crear nuevo Bootcamp
            "
            formData={formData}
            onSubmit={(values) => {
                //aquí tengo que meter los datos para enviar
            console.log('Valores del formulario:', values);
        }}
            />
    </div>
  )
}
