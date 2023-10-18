import React from 'react';
import { useState } from 'react';

function TableCompetencesAtom(props) {
    const { captionTittles, tittlesCompetence, contents } = props;

    if (!tittlesCompetence || tittlesCompetence.length === 0) {
        return <div>No se proporcionaron datos de las competencias.</div>;
    }
    const [showSelectors, setShowSelectors] = useState(false);

  const handleAddSelector = () => {
    setShowSelectors(true);
  };

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="block w-full overflow-x-auto">
                <div>
                    <table className="items-center w-full bg-transparent dark:border-neutral-200">
                        <caption className="text-2xl text-left p-4 caption-top border-b font-medium dark:border-neutral-200">
                            {captionTittles}
                        </caption>
                        <thead className="border-b font-medium dark:border-neutral-200">
                            <tr>
                                <th rowSpan={3} className="border-r px-6 py-4 dark:border-neutral-200">Fecha</th>
                                <th className="border-r px-6 py-4 dark:border-neutral-200">Tipo</th>
                                {tittlesCompetence.map((tittle) => (
                                    <th
                                        scope="col"
                                        className="border-r px-6 py-4 dark:border-neutral-200"
                                        key={tittle} // Usar el nombre de la competencia como clave
                                        colSpan={contents[0].competences[tittle].length} 
                                    >
                                        {tittle}
                                    </th>
                                ))}

                            </tr>
                        </thead>
                        <tbody className="border-b font-medium dark:border-neutral-200">
                            {contents && contents.flatMap((content, rowIndex) => {
                                const contentCells = [
                                    <td key="fecha" className="border px-6 py-4 dark:border-neutral-200">{content.fecha}</td>,
                                    <td key="tipo" className="border px-6 py-4 dark:border-neutral-200">{content.tipo}</td>,
                                    ...tittlesCompetence.flatMap((tittle) => 
                                        content.competences[tittle].map((value, i) => (
                                            <td key={`content-${rowIndex}-${i}`} className="border-r px-6 py-4 dark:border-neutral-200">
                                                {value}
                                            </td>
                                        ))
                                    )
                                ];

                                const selectCells = [
                                    <td key="spacer1" className="border px-6 py-4 dark:border-neutral-200"></td>,
                                    <td key="spacer2" className="border px-6 py-4 dark:border-neutral-200"></td>,
                                    ...tittlesCompetence.flatMap((tittle) => 
                                        content.competences[tittle].map((value, i) => (
                                            <td key={`select-${rowIndex}-${i}`} className="border px-6 py-4 dark:border-neutral-200">
                                                <select name={`level-${rowIndex}-${i}`} id={`level-${rowIndex}-${i}`}>
                                                    <option value="">--Selecciona un nivel--</option>
                                                    <option value="1">LEVEL 1</option>
                                                    <option value="2">LEVEL 2</option>
                                                    <option value="3">LEVEL 3</option>
                                                    <option value="4">LEVEL 4</option>
                                                    <option value="5">LEVEL 5</option>
                                                    <option value="6">LEVEL 6</option>
                                                    <option value="7">LEVEL 7</option>
                                                </select>
                                            </td>
                                        ))
                                    )
                                ];

                                return [
                                    <tr key={`contentRow-${rowIndex}`}>{contentCells}</tr>,
                                    <tr key={`selectRow-${rowIndex}`}>{selectCells}</tr>
                                ];
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
      </div>
       
    );
}

export default TableCompetencesAtom;
