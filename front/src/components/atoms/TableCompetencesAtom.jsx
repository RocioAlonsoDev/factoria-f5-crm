import React from 'react'

function TableCompetencesAtom(props) {
    const {captionTittles, tittlesCompetence, contents } = props;
    if (!tittlesCompetence || tittlesCompetence.length === 0 ) {
        return <div>No se proporcionaron datos de las competencias.</div>
    }
    
    return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div  className="block w-full overflow-x-auto">
            <div>
                <table className="items-center w-full bg-transparent dark:border-neutral-200">
                    <caption className="text-2xl text-left p-4 caption-top  border-b font-medium dark:border-neutral-200">
                    {captionTittles}
                    </caption>
                    <thead className="border-b font-medium dark:border-neutral-200">
                        <tr>
                            <th className="border-r px-6 py-4 dark:border-neutral-200">Fecha</th>
                            <th className="border-r px-6 py-4 dark:border-neutral-200">Tipo</th>
                            <th>
                            {tittlesCompetence && tittlesCompetence.map((tittle, index) => (
                                    <th scope="col" className="border-r px-6 py-4 dark:border-neutral-200" key={index}>
                                        {tittle}
                                    </th>
                                ))}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border-b font-medium dark:border-neutral-200">
    {contents && contents.map((content, index) => (
        content.values ? ( // Agrega esta comprobación
            <tr key={index}>
                <td  className="border px-6 py-4 dark:border-neutral-200">
                    {content.fecha}</td>
                <td  className="border px-6 py-4 dark:border-neutral-200">
                    {content.tipo}</td>
                {content.values.map((value, i) => (
                    <td key={i} className="border-r px-6 py-4 dark:border-neutral-200">{value}</td>
                ))}
            </tr>
        ) : null
    ))}
</tbody>

                </table>
            </div>

        </div>

    </div>
)
}

export default TableCompetencesAtom