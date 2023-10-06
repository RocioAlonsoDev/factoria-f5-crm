import NavbarAtom from '../../components/atoms/NavbarAtom';
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

  const menuItems = [
    { label: 'Inicio', url: '/' },
    { label: 'Jornada de Selección', url: '/jornada_seleccion' },
    { label: 'Total Aspirantes', url: '/total_aspirantes' },
    { label: 'Aspirantes por Bootcamp', url: '/aspirantes_bootcamp' },
    { label: 'Estadísticas', url: '/estadísticas' },
  ];

  

function SelectionDayAdd() {


  return (
    <>
    <NavbarAtom menuItems={menuItems} />
    <FormAtom
    formTitle="Formulario de Jornada"
    formData={formData}
     onSubmit={(values) => {
        //aquí tengo que meter los datos para enviar
    console.log('Valores del formulario:', values);
  }}
    />
  </>
  )
}

export default SelectionDayAdd;
