

export default function TableAtom(props) {

    const {tableTitle, data, columns}= props;
  return (
    <>

            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-blueGray-700 text-lg">
                        {tableTitle}
                    </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <button
                        className="bg-orange-500 text-white active:bg-orange-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                        ver todas
                    </button>
                    </div>
                </div>
                </div>
                <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                    <tr>
                        {columns.map((column, index) =>
                        (
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left" key={index}>
                                {column}

                            </th>
                        ) )}
                    </tr>
                    </thead>
                    <tbody>

                        {data.map((row, rowIndex) =>
                        (
                            <tr key={rowIndex}>
                                {columns.map((column, columnIndex) =>(
                                    <td key={columnIndex}>
                                        {row [column]}

                                    </td>
                                ))}

                            </tr>
                        )
                        )}

                    </tbody>
                </table>
                </div>
            </div>
    </>
  )
}

