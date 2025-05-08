import "./Table.css";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

export function BasicTable({ tableData, setTableData }) {
  // Define columns
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("barcode", {
      header: "Barcode",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("item", {
      header: "Item",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("price", {
      header: "Unit Price",
      cell: (infor) => infor.getValue(),
    }),
    columnHelper.accessor("quantity", {
      header: "Quantity",
      cell: (infor) => infor.getValue(),
    }),
    columnHelper.accessor("total", {
      header: "Total",
      cell: (infor) => infor.getValue(),
    }),
    columnHelper.accessor("delete", {
      header: "Clear",
      cell: ({ row }) => (
        <button
          onClick={() => {
            setTableData((prev) => prev.filter((_, i) => i !== row.index));
          }}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: "16px",
            color: "red",
          }}
          title="Delete Row"
        >
          ❌
        </button>
      ),
    }),
  ];
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table
      className="table-container"
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
