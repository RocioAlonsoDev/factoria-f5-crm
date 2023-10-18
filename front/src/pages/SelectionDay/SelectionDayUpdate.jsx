import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SelectionDayDataService from '../../services/recruitmentService/selectionDay.service';
import DefaultLayout from '../../layouts/DefaultLayout';

export default function SelectionDayUpdate() {
  const { id } = useParams();
  

  const [selectionDay, setSelectionDay] = useState({
    school: '',
    date: '',
    link: '',
    comment: '',
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    SelectionDayDataService.get(id)
      .then((response) => {
        setSelectionDay(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar la jornada de selección:', error);
        setIsLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectionDay({
      ...selectionDay,
      [name]: value,
    });
  };

  const updateSelectionDay = () => {
    SelectionDayDataService.update(id, selectionDay)
      .then(() => {
        window.location.href = "/recruitment/selectionday";
      })
      .catch((error) => {
        console.error('Error al actualizar la jornada de selección:', error);
      });
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const deleteSelectionDay = () => {
    if (window.confirm("¿Seguro que quieres borrar esta jornada?")) {
      SelectionDayDataService.delete(id)
        .then(() => {
          window.location.href = "/recruitment/selectionday";
        })
        .catch((error) => {
          console.error("Error al borrar la jornada de selección:", error);
        });
    }
  };
  
  

  return (
    <div  className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-around">
            <h6 className="text-blueGray-700 text-xl font-bold">Modificar Jornada de Selección</h6>
            <Link to={`/recruitment/selectiondayshow/${id}`}>
              <button className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                Ver Jornada
              </button>
            </Link>
            <button
            onClick={deleteSelectionDay}
            className="bg-white text-orange-500 border border-orange-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
            Borrar Jornada
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-md mt-3 mb-6 font-bold uppercase">
            Modificar Jornada de Selección
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-md font-bold mb-2"
                  htmlFor="school"
                >
                  Escuela
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="school"
                  value={selectionDay.school}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-md font-bold mb-2"
                  htmlFor="date"
                >
                  Día y Hora de la Jornada de Selección
                </label>
                <input
                  type="date"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="date"
                  value={selectionDay.date}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-md font-bold mb-2"
                  htmlFor="link"
                >
                  Link de Reunión
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="link"
                  value={selectionDay.link}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-md mt-3 mb-6 font-bold uppercase">
            Comentarios
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <textarea
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="comment"
                  value={selectionDay.comment}
                  onChange={handleInputChange}
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <button
            className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            onClick={updateSelectionDay}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}
