import PropTypes from 'prop-types';
import { useState } from "react";

export default function RegularModal({ setIsModalOpen }) {
  const [formData, setFormData] = useState({
    comment: "",
    stage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModalClick = (e) => {
    // Evita que el evento se propague y cierre el modal
    e.stopPropagation();
  };

  const handleGuardarClick = () => {
    // Agrega aquí la lógica para guardar los datos del formulario
    // Puedes hacer una llamada a una función para guardar los datos en tu aplicación
    // Una vez que los datos se guarden con éxito, puedes cerrar el modal usando setIsModalOpen(false)
    // setIsModalOpen(false);
  };

  return (
    <>
      <div
      
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => setIsModalOpen(false)}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl" onClick={handleModalClick}>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Comentario nuevo</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="mb-4">
                <label className="block text-blueGray-700 text-sm font-bold mb-2">Comentario:</label>
                <textarea
                  name="comment"
                  rows={15}
                  cols={7}
                  wrap="wrap"
                  maxLength={200}
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-blueGray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-blueGray-700 text-sm font-bold mb-2">Etapa:</label>
                <input
                  type="text"
                  name="stage"
                  value={formData.stage}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-blueGray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </button>
              <button
                className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleGuardarClick}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

RegularModal.propTypes = {
     setIsModalOpen: PropTypes.any.isRequired,

 };