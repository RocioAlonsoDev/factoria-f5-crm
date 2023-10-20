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
                <th className="border-r px-6 py-4 dark:border-neutral-200">Fecha</th>
                <th className="border-r px-6 py-4 dark:border-neutral-200">Tipo</th>
                  {categories &&
                    categories.map((category) => (
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-200"
                        key={category.name}
                        colSpan={category.skills.length}>
                        {category.name}
                      </th>
                    ))}
              </tr>
            </thead>
            <tbody className="border-b font-medium dark:border-neutral-200">
              <tr>
                <td className="border-r px-6 py-4 dark:border-neutral-200"></td>
                <td className="border-r px-6 py-4 dark:border-neutral-200"></td>
                  {categories.map((category) =>
                    category.skills.length ? (
                      category.skills.map((skill, skillIndex) => (
                        <td
                          key={`${category.name}-${skillIndex}`}
                          className="border-r px-6 py-4 dark:border-neutral-200">
                          {skill.name}
                        </td>
                      ))
                  ) : (
                <td className="border-r px-6 py-4 dark:border-neutral-200">-</td>
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
