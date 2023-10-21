import React from 'react';

function TableCompetencesAtom(props) {
  const { categories, captionTittles } = props;

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
                <th className="text-xl border-r px-6 py-4 dark:border-neutral-200">Fecha</th>
                <th className="text-xl border-r px-6 py-4 dark:border-neutral-200">Tipo</th>
                {categories &&
                  categories.map((category) => (
                    <th
                      scope="col"
                      className="text-xl border px-6 py-4 dark:border-neutral-200"
                      key={category.name}
                      colSpan={category.skills.length}
                    >
                      {category.name}
                    </th>
                  ))}
              </tr>
              {/* Agrega una fila para los selectores */}
              <tr>
                <td className="border-r px-6 py-4 dark:border-neutral-200" key="empty-date"></td>
                <td className="border-r px-6 py-4 dark:border-neutral-200" key="empty-type"></td>
                {categories.map((category) =>
                  category.skills.length ? (
                    category.skills.map((skill, skillIndex) => (
                      <td
                        key={`${category.name}-${skillIndex}`}
                        className="border-r px-6 py-4 dark:border-neutral-200"
                      >
                        {skill.name}
                      </td>
                    ))
                  ) : (
                    <td className="border-r px-6 py-4 dark:border-neutral-200" key={`empty-skill-${category.name}`}>-</td>
                  )
                )}
              </tr>
            </thead>
            <tbody className="border-b font-medium dark:border-neutral-200">
              <tr>
                <td className="border-r px-6 py-4 dark:border-neutral-200" key="empty-date-body"></td>
                <td className="border-r px-6 py-4 dark:border-neutral-200">
                  <select name="type" id="type">
                  <option value="">-Selecciona una evaluación-</option>
                    <option value="EVALUCAION">Evaluación</option>
                    <option value="CO-EVALUACION">Co-evaluación</option>
                    <option value="AUTO-EVALUCAION">Auto-evaluación</option>

                  </select>
                </td>
                {categories.map((category) =>
                  category.skills.length ? (
                    category.skills.map((skill, skillIndex) => (
                      <td
                        key={`select-${category.name}-${skillIndex}`}
                        className="border-r px-6 py-4 dark:border-neutral-200"
                      >
                        <select
                          name={`level-${skillIndex}`}
                          id={`level-${skillIndex}`}
                        >
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
                  ) : (
                    <td className="border-r px-6 py-4 dark:border-neutral-200" key={`select-empty-${category.name}`}>-</td>
                  )
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableCompetencesAtom;
