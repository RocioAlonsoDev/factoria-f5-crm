import NavbarAtom from '../../components/atoms/NavbarAtom';
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

  const menuItems = [
    { label: 'Inicio', url: '/' },
    { label: 'Jornada de Selección', url: '/jornada_seleccion' },
    { label: 'Total Aspirantes', url: '/total_aspirantes' },
    { label: 'Aspirantes por Bootcamp', url: '/aspirantes_bootcamp' },
    { label: 'Estadísticas', url: '/estadísticas' },
  ];

  

function SelectionDayAdd() {


  return (
    <div className="pt-14">
      <NavbarAtom menuItems={menuItems} />
      <FormAtom
        formTitle="Nueva Jornada de Selección"
        formData={formData}
        onSubmit={(values) => {
          // Aquí tienes que manejar los datos para enviar
          console.log('Valores del formulario:', values);
        }}
      />
    </div>
  )
}

export default SelectionDayAdd;
