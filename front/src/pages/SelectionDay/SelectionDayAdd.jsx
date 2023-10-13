import NavbarAtom from '../../components/atoms/NavbarAtom';
import FormAtom from '../../components/atoms/FormAtom';
import SelectionDayDataService from './../../services/recruitmentService/selectionDay.service';
import { useNavigate } from 'react-router-dom';
import SideBarAtom from '../../components/atoms/SideBarAtom';

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
  

  const menuItems = [
    { label: 'Inicio', url: '/' },
    { label: 'Jornada de Selección', url: '/jornada_seleccion' },
    { label: 'Total Aspirantes', url: '/total_aspirantes' },
    { label: 'Aspirantes por Bootcamp', url: '/aspirantes_bootcamp' },
    { label: 'Estadísticas', url: '/estadísticas' },
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
    <>
      <div>
        <NavbarAtom menuItems={menuItems} />
      </div>
      <SideBarAtom/>
      <FormAtom
        formTitle="Formulario de Jornada"
        formData={formData}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default SelectionDayAdd;
