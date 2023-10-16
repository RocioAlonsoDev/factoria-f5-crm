// import React, { useState, useEffect } from "react";
// import { useParams, Link } from 'react-router-dom';
// import SelectionDayDataService from "../../services/recruitmentService/selectionDay.service";

export default function SelectionDayEdit() {
//   const { id } = useParams();
//   const [selectionDay, setSelectionDay] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     school: '',
//     date: '',
//     link: '',
//     comment: '',
//   });

//   const history = useHistory();

//   useEffect(() => {
//     SelectionDayDataService.get(id)
//       .then((response) => {
//         setSelectionDay(response.data);
//         // Inicializa el formData con los datos actuales
//         setFormData(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error al cargar la jornada de selección:', error);
//         setIsLoading(false);
//       });
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // Actualiza el estado del formData cuando los campos cambian
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       // Realiza la solicitud para actualizar la jornada
//       await SelectionDayDataService.update(id, formData);
//       history.push(`/recruitment/selectiondayshow/${id}`);
//     } catch (error) {
//       console.error('Error al guardar la jornada de selección:', error);
//     }
//   };

//   if (!selectionDay || isLoading) {
//     return <div>Cargando...</div>;
//   }

//   return (
//     <div>
//       <h6>Editar Jornada de Selección</h6>
//       <label>Escuela</label>
//       <input
//         type="text"
//         name="school"
//         value={formData.school}
//         onChange={handleInputChange}
//       />
//       <label>Día y hora de la jornada de selección</label>
//       <input
//         type="text"
//         name="date"
//         value={formData.date}
//         onChange={handleInputChange}
//       />
//       <label>Link de reunión</label>
//       <input
//         type="text"
//         name="link"
//         value={formData.link}
//         onChange={handleInputChange}
//       />
//       <label>Comentarios</label>
//       <textarea
//         name="comment"
//         value={formData.comment}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSave}>Guardar</button>
//       <Link to={`/recruitment/selectiondayshow/${id}`}>Cancelar</Link>
//     </div>
//   );
}
