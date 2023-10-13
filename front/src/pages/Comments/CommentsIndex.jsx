import { useState, useEffect } from 'react';
import TableAtom from '../../components/atoms/TableAtom';
import TableDropdown from './TableDropdown';
import AddCommentModal from './AddCommentModal';
import CommentDataService from '../../services/recruitmentService/comments.service';
import { useParams } from 'react-router';

export default function CommentsIndex() {
  const {id} = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Obtener los comentarios al cargar el componente
    CommentDataService.get(id)
      .then(async (response) => {
        setComments(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar los comentarios:', error);
        setIsLoading(false);
      });
  }, [id]);

  console.log("Comments:" , comments);

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const data = comments.map((comment) => ({
    Comentario: comment.comment,
    Etapa: comment.stage,
    Escrito: comment.id_user,
    Fecha: formatDate(comment.created_at), 
    '': <TableDropdown />,
  }));
  console.log("Data:", data);

  const columns = ['Comentario', 'Etapa', 'Escrito', 'Fecha', ''];



  const handleCreateComment = async (data) => {
    try {
      const response = await CommentDataService.create(data);
      const newComment = response.data; 
      setComments([...comments, newComment]); 
    } catch (error) {
      console.error('Error creating status:', error);
    }
  };
  


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Comentarios:</h6>
            <button
              className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              Añadir comentario
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <TableAtom data={data} columns={columns} />
        </div>
      </div>
      {isModalOpen && <AddCommentModal setIsModalOpen={setIsModalOpen} onClick={handleCreateComment}/>}
    </>
  );
}