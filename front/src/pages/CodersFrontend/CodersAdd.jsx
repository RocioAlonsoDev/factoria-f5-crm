import FormAtom from '../../components/atoms/FormAtom'

const formData = [
    {
      id: 'name', 
      label: 'Nombre', 
      type: 'text', 
    },
    {
      id: 'surname', 
      label: 'Apellido', 
      type: 'text', 
    },
    {
       id: 'email', 
       label: 'Correo Electrónico', 
       type: 'text', 
    },
    {
      id: 'image', 
      label: 'Foto', 
      type: 'text', 
   },
   {
      id: 'phone', 
      label: 'Teléfono', 
      type: 'text', 
    },
    {
      id: 'address', 
      label: 'Dirección', 
      type: 'text', 
    },
    {
        id: 'city', 
        label: 'Ciudad', 
        type: 'text', 
      },
      {
        id: 'region', 
        label: 'Comunidad Autonoma', 
        type: 'enum', 
      },
      {
         id: 'dataprotection', 
         label: 'Protección de datos', 
         type: 'enum', 
      },
      {
        id: 'birthdate', 
        label: 'Fecha de nacimiento', 
        type: 'date', 
     },
     {
        id: 'gender', 
        label: 'Género', 
        type: 'enum', 
     },
     {
        id: 'dni', 
        label: 'DNI', 
        type: 'text', 
     },
     {
        id: 'id_status', 
        label: 'Status', 
        type: 'bigint', 
     },
     {
        id: 'id_bootcamp', 
        label: 'Bootcamp', 
        type: 'bigint', 
     },

  ];

export default function CodersAdd() {
  return (
    <div className="md:block md:absolute md:top-16 md:left-64 md:right-0 w-auto p-2">
         <FormAtom
            formTitle="Crear nuevo coder
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

