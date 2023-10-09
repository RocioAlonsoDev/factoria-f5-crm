import  { useState } from 'react';
import TableAtom from "../../components/atoms/TableAtom";
import TableDropdown from "./TableDropdown";
import RegularModal from "./RegularModalAtom";

export default function CommentsIndex() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      Comentario: 'Está muy interesada en el bootcamp, ha llamado varias veces y ha hablado con Cris',
      Etapa: 'Convocatoria Selección',
      Escrito: 'Ana Álvarez',
      Fecha: '2023-10-06',
      '': <TableDropdown/>
    },
    {
      Comentario: 'Está muy interesada en el bootcamp, ha llamado varias veces y ha hablado con Cris',
      Etapa: 'Joranada selección',
      Escrito: 'Ana Álvarez',
      Fecha: '2023-10-06',
      '': <TableDropdown/>
    }
  ];

  const columns = [
    'Comentario',
    'Etapa',
    'Escrito',
    'Fecha',
    ''
  ];

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
      {isModalOpen && <RegularModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

