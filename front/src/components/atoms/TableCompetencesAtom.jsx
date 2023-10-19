import React from 'react';

function TableCompetencesAtom(props) {
  const { captionTittles, tittlesCompetence, contents, showSelects } = props;

  if (!tittlesCompetence || tittlesCompetence.length === 0) {
    return <div>No se proporcionaron datos de las competencias.</div>;
  }

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
                {tittlesCompetence.map((competence, i) => (
                  <th
                    key={`competence-${i}`}
                    className="border-r px-6 py-4 dark:border-neutral-200"
                  >
                    {competence}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-b font-medium dark:border-neutral-200">
              {contents.map((competenceData, rowIndex) => (
                <tr key={`contentRow-${rowIndex}`}>
                  <td className="border-r px-6 py-4 dark:border-neutral-200">
                    {competenceData.fecha}
                  </td>
                  <td className="border-r px-6 py-4 dark:border-neutral-200">
                    {competenceData.tipo}
                  </td>
                  {tittlesCompetence.map((competence, i) => (
                    <td
                      key={`content-${rowIndex}-${i}`}
                      className="border-r px-6 py-4 dark:border-neutral-200"
                    >
                      {competenceData.competences[competence]
                        ? competenceData.competences[competence].join(', ')
                        : '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableCompetencesAtom;
