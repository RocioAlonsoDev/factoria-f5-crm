import React from 'react';

function TableCompetencesAtom(props) {
  const { captionTittles, tittlesCompetence, contents, showSelects } = props;

  if (!tittlesCompetence || tittlesCompetence.length === 0) {
    return <div>No se proporcionaron datos de las competencias.</div>;
  }

  // Inicializar combinedData con arrays vacíos para cada competencia
  const combinedData = {
    fecha: [],
    tipo: [],
    ...tittlesCompetence.reduce((acc, competence) => ({ ...acc, [competence]: [] }), {}),
  };

  // Combinar todos los datos en combinedData
  contents.forEach((content) => {
    {combinedData.fecha.length > 0 ? combinedData.fecha.join(', ') : ''}
    // {combinedData.tipo.length > 0 ? combinedData.tipo.join(', ') : ''}
    combinedData.tipo.push(content.tipo ? content.tipo : '');




    tittlesCompetence.forEach((competence) => {
      combinedData[competence].push(content.competences[competence] ? content.competences[competence].join() : '');
    });
  });

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
            <tbody>
              <tr>
                <td className="border px-6 py-4 dark:border-neutral-200">{combinedData.fecha.join('')}</td>
                <td className="border px-6 py-4 dark:border-neutral-200">{combinedData.tipo.join('')}</td>
                {tittlesCompetence.map((competence, i) => (
                  <td
                    key={`combined-${i}`}
                    className="border-r px-6 py-4 dark:border-neutral-200"
                  >
                    {combinedData[competence].join('')}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableCompetencesAtom;
