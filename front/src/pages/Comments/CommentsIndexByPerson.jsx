import { useParams } from 'react-router';
import CommentDataService from '../../services/recruitmentService/comments.service';
import UserDataService from '../../services/crmService/user.service';
import { useState, useEffect } from 'react';
import TableAtom from '../../components/atoms/TableAtom';
import TableDropdown from './TableDropdown';
import AddCommentModal from './AddCommentModal';
import EditCommentModal from './EditCommentModal';
import Popup from '../../components/atoms/PopUp';

export default function CommentsIndexByPerson() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editCommentId, setEditCommentId] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  useEffect(() => {
    CommentDataService.findByPerson(id)
      .then(async (response) => {
        if (Array.isArray(response.data.data)) {
          const commentsData = response.data.data;
          const userPromises = commentsData.map((comment) => {
            return UserDataService.get(comment.id_user);
          });

          try {
            const userResponses = await Promise.all(userPromises);
            console.log('User Responses:', userResponses);

            const updatedComments = commentsData.map((comment, index) => {
              const user = userResponses[index].data.user;
              console.log('User:', user);
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

  console.log('Comments:', comments);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const handleDeleteComment = (commentId) => {
    setSelectedCommentId(commentId);
    setIsConfirmDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await CommentDataService.delete(selectedCommentId);
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
    Comentario: comment.comment,
    Etapa: comment.stage,
    Escrito: comment.user,
    Fecha: formatDate(comment.created_at),
    '': (
      <TableDropdown
        commentId={comment.id}
        onDeleteComment={handleDeleteComment}
        onEditComment={handleEditComment}
      />
    ),
  }));
  console.log('Data:', data);

  const columns = ['Comentario', 'Etapa', 'Escrito', 'Fecha', ''];

  return (
    <div className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Comentarios:</h6>
              <button
                className="bg-orange-500 text-white active-bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover-shadow-md outline-none focus-outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsModalOpen(true)}
              >
                Añadir comentario
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg-px-10 py-10 pt-0">
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <TableAtom data={data} columns={columns} />
          </div>
        </div>
        {isModalOpen && <AddCommentModal setIsModalOpen={setIsModalOpen} />}
        {isEditModalOpen && (
          <EditCommentModal
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
    </div>
  );
}