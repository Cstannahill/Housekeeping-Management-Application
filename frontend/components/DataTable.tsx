import { useTable, Column } from "react-table";

type TableData = {
  id: string;
  description: string;
  room: string;
  assignedTo: string;
  status: string;
  date: string;
};

interface DataTableProps {
  columns: Column<TableData>[];
  data: TableData[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      className="min-w-full border-collapse bg-white shadow-md rounded-lg"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="bg-gray-200"
            key={headerGroup.id}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="px-4 py-2 border-b border-gray-300 text-left text-sm font-medium text-gray-700"
                key={column.id}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="hover:bg-gray-100"
              key={row.id}
            >
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="px-4 py-2 border-b border-gray-300 text-sm text-gray-600"
                  key={cell.column.id}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
