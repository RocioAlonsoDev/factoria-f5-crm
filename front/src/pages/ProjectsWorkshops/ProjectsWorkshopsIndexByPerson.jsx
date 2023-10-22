import { useParams } from 'react-router';
import ProjectsWorkhopsDataService from '../../services/trackingService/projects.service';
import UserDataService from '../../services/crmService/user.service';
import { useState, useEffect } from 'react';
import TableAtom from '../../components/atoms/TableAtom';
import AddProjectsCommentsModal from './AddProjectsCommentsModal';
import EditProjectsCommentsModal from './EditProjectsCommentsModal';
import Popup from '../../components/atoms/PopUp';
import ButtonAtom from "../../components/atoms/ButtonAtom";


export default function ProjectsWorkShopsIndexByPerson() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editCommentId, setEditCommentId] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  useEffect(() => {
    ProjectsWorkhopsDataService.findByPerson(id)
      .then(async (response) => {
        if (Array.isArray(response.data)) {
          const projectsCommentsData = response.data;
          const userPromises = projectsCommentsData.map((comment) => {
            return UserDataService.get(comment.user_id);
          });

          try {
            const userResponses = await Promise.all(userPromises);

            const updatedComments = projectsCommentsData.map((comment, index) => {
              const user = userResponses[index].data.user;
              return {
                ...comment,
                user: user.name,
              };
            });

            setComments(updatedComments);
            setIsLoading(false);
          } catch (error) {
            console.error('Error al cargar detalles de usuarios:', error);
            setIsLoading(false);
          }
        } else {
          console.error('Response data is not an array of comments:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error al cargar los comentarios:', error);
        setIsLoading(false);
      });
  }, [id]);

  const handleDeleteComment = (commentId) => {
    setSelectedCommentId(commentId);
    setIsConfirmDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await ProjectsWorkhopsDataService.delete(selectedCommentId);
      const updatedComments = comments.filter((comment) => comment.id !== selectedCommentId);
      setComments(updatedComments);

    } catch (error) {
      console.error('Error al eliminar el comentario:', error);
    }
    setSelectedCommentId(null);
    setIsConfirmDeleteOpen(true);
  };


  const handleEditComment = (commentId) => {
    setEditCommentId(commentId);
    setIsEditModalOpen(true);
  };

  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const data = comments.map((comment) => ({
    Proyecto: comment.project_name,
    Observaciones: comment.observations,
    Autor: comment.user,
    Fecha: formatDate(comment.submission_date),  
    
    '' : (<>
       
        <ButtonAtom onClick={handleEditComment}  addbutton='Editar'></ButtonAtom>
        <ButtonAtom onClick={handleDeleteComment}  addbutton='Eliminar'></ButtonAtom>
        </>)
  }));
  

  const columns = ['Proyecto', 'Fecha', 'Observaciones', 'Autor', ''];

  return (

      <>
        
        <div className="md:block md:absolute md:top-[107px] md:left-64 md:right-0 w-auto p-2">
            <TableAtom tableTitle='Proyectos y Talleres' addbutton='Agregar comentario' addButtonOnClick={setIsModalOpen} data={data} columns={columns} />
            {isLoading && <div className='pl-3'>Cargando...</div>}
        </div>
        {isModalOpen && <AddProjectsCommentsModal setIsModalOpen={setIsModalOpen} />}
        {isEditModalOpen && (
          <EditProjectsCommentsModal
            setIsEditModalOpen={setIsEditModalOpen}
            commentId={editCommentId}
            updateComments={setComments}
          />
        )}
        {isConfirmDeleteOpen && (
          <Popup isOpen={setIsConfirmDeleteOpen} onClose={handleConfirmDelete} >
            <h6 className="text-blueGray-700 font-bold mb-4">
              ¡Estás a punto de eliminar este comentario!
            </h6>
            <h2 className="text-2xl font-bold mb-4">¿Eliminar?</h2>
              {/* <button
                className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsConfirmDeleteOpen(false)}
              >
                Cerrar
              </button> */}
          </Popup>
        )}
      </>

  )
}