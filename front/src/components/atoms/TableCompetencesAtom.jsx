import React from 'react';

function TableCompetencesAtom(props) {
  const { captionTittles, tittlesCompetence, contents, showSelects } = props;

  if (!tittlesCompetence || tittlesCompetence.length === 0) {
    return <div>No se proporcionaron datos de las competencias.</div>;
  }

  // Extrae todas las competencias únicas de los contenidos
  const allCompetences = Array.from(
    new Set(
      contents.flatMap((content) => Object.keys(content.competences))
    )
  );

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
                <th className="border-r px-6 py-4 dark:border-neutral-200">Fecha</th>
                <th className="border-r px-6 py-4 dark:border-neutral-200">Tipo</th>
                {allCompetences.map((competence) => (
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-200"
                    key={competence}
                    colSpan={contents.flatMap((content) =>
                      content.competences[competence] ? content.competences[competence].length : 0
                    )}
                  >
                    {competence}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-b font-medium dark:border-neutral-200">
              {contents.map((content, rowIndex) => {
                const contentCells = [
                  <td key="fecha" className="border px-6 py-4 dark:border-neutral-200">
                    {content.fecha}
                  </td>,
                  <td key="tipo" className="border px-6 py-4 dark:border-neutral-200">
                    {content.tipo}
                  </td>,
                  ...allCompetences.flatMap((competence) =>
                    content.competences[competence].map((value, i) => (
                      <td
                        key={`content-${rowIndex}-${i}`}
                        className="border-r px-6 py-4 dark:border-neutral-200"
                      >
                        {value}
                      </td>
                    ))
                  ),
                ];

                const selectCells = showSelects
                  ? allCompetences.flatMap((competence) =>
                      content.competences[competence].map((value, i) => (
                        <td
                          key={`select-${rowIndex}-${i}`}
                          className="border px-6 py-4 dark:border-neutral-200"
                        >
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
                  : null;

                return [
                  <tr key={`contentRow-${rowIndex}`}>{contentCells}</tr>,
                  <tr key={`selectRow-${rowIndex}`}>{selectCells}</tr>,
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
