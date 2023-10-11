import NavbarAtom from '../../components/atoms/NavbarAtom';
import FormAtom from '../../components/atoms/FormAtom'
import SelectionDayDataService from './../../services/recruitmentService/selectionDay.service'
import {useNavigate} from 'react-router-dom';
import NavbarAtom from '../../components/atoms/NavbarAtom';


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

  const menuItems = [
    { label: 'Inicio', url: '/' },
    { label: 'Jornada de Selección', url: '/jornada_seleccion' },
    { label: 'Total Aspirantes', url: '/total_aspirantes' },
    { label: 'Aspirantes por Bootcamp', url: '/aspirantes_bootcamp' },
    { label: 'Estadísticas', url: '/estadísticas' },
  ];

  const menuItems = [
    { label: 'Inicio', url: '/' },
    { label: 'Jornada de Selección', url: '/seleccion' }, 
    { label: 'Total Aspirantes', url: '/aspirantes' }, 
    { label: 'Aspirantes Bootcamp', url: '/bootcamp' }, 
    { label: 'Estadísticas', url: '/estadisticas' }, 
  ];
 


  return (
   <>
   <div>
    <NavbarAtom menuItems={menuItems}/>
    </div>
    
    <FormAtom
    formTitle="Formulario de Jornada"
    formData={formData}
    onSubmit={handleSubmit}
  />
  </>
  )
}

export default SelectionDayAdd;
