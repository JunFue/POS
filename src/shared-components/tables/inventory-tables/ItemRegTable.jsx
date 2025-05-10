import "../../../Styles.css";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

export function ItemRegTable({ itemRegTable, setItemRegTable }) {
  // Define columns
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
      cell: (infor) => infor.getValue(),
    }),
    columnHelper.accessor("packaging", {
      header: "Packaging Type",
      cell: (infor) => infor.getValue(),
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: (infor) => infor.getValue(),
    }),
  ];
  const table = useReactTable({
    data: itemRegTable,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table
      className="min-w-full"
      border="1"
      cellPadding="8"
      style={{ borderCollapse: "collapse" }}
    >
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
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
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
