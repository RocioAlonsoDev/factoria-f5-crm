import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectsWorkhopsDataService from '../../services/trackingService/projects.service';

export default function EditProjectsCommentsModal({ setIsEditModalOpen, commentId, updateComments }) {
  const [formData, setFormData] = useState({
    observations: "",
    submission_date: "",
    project_name: "",
    user_id: "",
  });

  useEffect(() => {
    ProjectsWorkhopsDataService.get(commentId)
      .then(({ data }) => {
        setFormData(data);
      })
      .catch((error) => {
        console.error('Error fetching comment data:', error);
      });
  }, [commentId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateComment = async () => {
    try {
      await ProjectsWorkhopsDataService.update(commentId, formData);
      setIsEditModalOpen(false);

      updateComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, ...formData };
          }
          return comment;
        })
      );
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Editar Comentario</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setIsEditModalOpen(false)}
              >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>

          <div className="relative p-6 flex-auto">
            <div className="mb-4">
              <label className="block text-blueGray-700 text-sm font-bold mb-2">Nombre del Proyecto:</label>      
              <input
                type="text"
                name="project_name"
                value={formData.project_name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blueGray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-blueGray-700 text-sm font-bold mb-2">Fecha:</label>     
              <input
                type="date"
                name="submission_date"
                value={formData.submission_date}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blueGray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-blueGray-700 text-sm font-bold mb-2">Observaciones:</label>
              <textarea
                name="observations"
                value={formData.observations}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blueGray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button 
              className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"  
              onClick={() => setIsEditModalOpen(false)}
              >
                Cerrar
            </button>
            <button 
              className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button" 
              onClick={handleUpdateComment}
              >
                Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

EditProjectsCommentsModal.propTypes = {
  setIsEditModalOpen: PropTypes.func.isRequired,
  commentId: PropTypes.number.isRequired,
  updateComments: PropTypes.func.isRequired,
};
