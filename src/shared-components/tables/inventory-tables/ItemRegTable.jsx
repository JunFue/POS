import "../../../Styles.css";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

export function ItemRegTable({ tableData, setTableData }) {
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("barcode", {
      header: "Barcode",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("price", {
      header: "Unit Price",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("packaging", {
      header: "Packaging Type",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("remove", {
      header: "Remove",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="min-w-full table-fixed border-collapse mt-[1vw]">
      <thead className="sticky top-0 bg-gray-100 z-10">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="text-left font-semibold text-sm text-gray-700 px-3 py-2 border-b border-gray-300"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="hover:bg-blue-50 transition-colors duration-150"
          >
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="px-3 py-2 text-sm text-gray-600 border-b border-gray-200"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
