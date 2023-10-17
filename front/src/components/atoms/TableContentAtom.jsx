import React from 'react';

function TableContentAtom(props) {
    const { captionTittles, theadTittles, tableData, date, dateWrite } = props;

    if (!tableData || tableData.length === 0) {
        return <div>No se proporcionaron datos.</div>;
    }

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div  className="block w-full overflow-x-auto">
                <div className=''>
                    <table className="items-center w-full bg-transparent dark:border-neutral-200">
                        <caption className="text-2xl p-4 caption-top  border-b font-medium dark:border-neutral-200">
                            {captionTittles}
                        </caption>
                        <thead className="border-b font-medium dark:border-neutral-200">
                            <tr>
                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-200">
                                    {date}
                                </th>
                                {theadTittles.map((header, index) => (
                                    <th scope="col" className="border-r px-6 py-4 dark:border-neutral-200" key={index}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="border-b font-medium dark:border-neutral-200">
                            {tableData.map((dataRow, rowIndex) => (
                                <tr scope="row" key={rowIndex}>
                                    <td className="border px-6 py-4 dark:border-neutral-200">
                                        {dateWrite}
                                    </td>
                                    {theadTittles.map((header, index) => (
                                        <td className="border px-6 py-4 dark:border-neutral-200" key={index}>
                                            <select name={`level-${index}`} id={`level-${index}`}>
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

export default TableContentAtom;
import React from 'react';

function TableContentAtom(props) {
    const { captionTittles, theadTittles, tableData, date, dateWrite } = props;

    if (!tableData || tableData.length === 0) {
        return <div>No se proporcionaron datos.</div>;
    }

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-ful mb-6 shadow-lg rounded">
            <div>
                <div className=''>
                    <table className="items-center w-full bg-transparent dark:border-neutral-200">
                        <caption className="text-2xl p-4 caption-top  border-b font-medium dark:border-neutral-200">
                            {captionTittles}
                        </caption>
                        <thead className="border-b font-medium dark:border-neutral-200">
                            <tr>
                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-200">
                                    {date}
                                </th>
                                {theadTittles.map((header, index) => (
                                    <th scope="col" className="border-r px-6 py-4 dark:border-neutral-200" key={index}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="border-b font-medium dark:border-neutral-200">
                            {tableData.map((dataRow, rowIndex) => (
                                <tr scope="row" key={rowIndex}>
                                    <td className="border px-6 py-4 dark:border-neutral-200">
                                        {dateWrite}
                                    </td>
                                    {theadTittles.map((header, index) => (
                                        <td className="border px-6 py-4 dark:border-neutral-200" key={index}>
                                            <select name={`level-${index}`} id={`level-${index}`}>
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

export default TableContentAtom;
