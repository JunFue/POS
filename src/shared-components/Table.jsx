import "./Table.css";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

// Sample data
const defaultData = [
  {
    barcode: "123001",
    item: "Alingatong",
    price: 30,
    quantity: 14,
    total: `₱${420}`,
    delete: "del-icon",
  },
  {
    barcode: "123002",
    item: "Ashitaba",
    price: 30,
    quantity: 14,
    total: `₱${420}`,
    delete: "del-icon",
  },
  {
    barcode: "123003",
    item: "ALA",
    price: 30,
    quantity: 14,
    total: `₱${420}`,
    delete: "del-icon",
  },
  {
    barcode: "123004",
    item: "Ashwaganda",
    price: 30,
    quantity: 14,
    total: `₱${420}`,
    delete: "del-icon",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
  {
    barcode: "",
    item: "",
    price: "",
    quantity: "",
    total: "",
    delete: "",
  },
];

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
    cell: (infor) => infor.getValue(),
  }),
];

export function BasicTable() {
  const table = useReactTable({
    data: defaultData,
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
