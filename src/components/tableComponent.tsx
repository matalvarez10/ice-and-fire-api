import React, { useMemo } from "react";
import { useTable, Column, CellProps, useGlobalFilter, useSortBy } from "react-table";
import { Link } from "react-router-dom";
import { IBookAddedData } from "../interfaces/bookAddedData.interface";
import { useOutletContext } from "react-router-dom";
import { IOutletProps } from "../interfaces/outletProps.interface";
import { GlobalFilter } from "./globalFilter";

interface Props {
  data: IBookAddedData[]; 
}

const BookTable: React.FC<Props> = ({ data }) => {
  const { addFavorite } = useOutletContext() as IOutletProps;

  const columns: Column<IBookAddedData>[] = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        sortType: "alphanumeric",
      },
      {
        Header: "Authors",
        accessor: "authors",
        Cell: ({ value }: CellProps<IBookAddedData, string[]>) => (
          <>{value.join(", ")}</>
        ),
      },
      {
        Header: "More Detail",
        Cell: ({ row }: { row: { original: IBookAddedData } }) => (
          <button>
            <Link to={`/books/${row.original.isbn}`}>More Detail</Link>
          </button>
        ),
      },
      {
        Header: "Favorite",
        Cell: ({ row }: { row: { original: IBookAddedData } }) => (
          <button
            style={{ backgroundColor: row.original.favorite ? "blue" : "red" }}
            onClick={() => addFavorite(row.original.isbn)}
          >
            Favorite
          </button>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,state,setGlobalFilter } =
    useTable<IBookAddedData>({ columns, data }, useGlobalFilter, useSortBy); 

  const {globalFilter} = state; 

  return (
    <div className="book-table">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <table {...getTableProps()} >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}> 
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
