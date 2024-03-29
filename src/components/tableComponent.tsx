import React, { useMemo, useEffect, useState } from "react";
import {
  useTable,
  Column,
  CellProps,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import { Link } from "react-router-dom";
import { IBookAddedData } from "../interfaces/bookAddedData.interface";
import { useOutletContext } from "react-router-dom";
import { IOutletProps } from "../interfaces/outletProps.interface";
import { GlobalFilter } from "./globalFilter";
import { AiFillStar } from "react-icons/ai";
import { FaBook } from "react-icons/fa6";
import { FaPenClip } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  data: IBookAddedData[];
}

const BookTable: React.FC<Props> = ({ data }) => {
  const { addFavorite , deleteBook } = useOutletContext() as IOutletProps;

  const [isLGScreen, setIsLGScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLGScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsLGScreen(window.innerWidth >= 1024);
  }, []);
  const columns: Column<IBookAddedData>[] = useMemo(
    () => [
      {
        id: "icon-book",
        Cell: <FaBook fontSize={18} className="text-blue-500" />,
      },
      {
        id: "name",
        Header: "Name",
        accessor: "name",
        sortType: "alphanumeric",
      },
      {
        id: "n-pages",
        Header: "Number of Pages",
        accessor: "numberOfPages",
        sortType: "alphanumeric",
      },
      {
        id: "authors",
        Header: "Authors",
        accessor: "authors",
        Cell: ({ value }: CellProps<IBookAddedData, string[]>) => (
          <>{value.join(", ")}</>
        ),
      },
      {
        id: "More-Details",
        Cell: ({ row }: { row: { original: IBookAddedData } }) => (
          <div className="flex flex-row gap-4 justify-center">
            <Link
              to={`/books/${row.original.isbn}`}
              className="bg-blue-500 rounded py-2 px-3 font-raleway text-white text-xs
              hover:scale-110 transition ease-in duration-300
              "
            >
              {!isLGScreen ? <FaPenClip /> : "More details"}
            </Link>
            <button
              onClick={() => addFavorite(row.original.isbn)}
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <AiFillStar
                fontSize={20}
                color={row.original.favorite ? "gold" : "gray"}
              />
            </button>
            <button
              onClick={() => deleteBook(row.original.isbn)}
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <FaTrashAlt
                fontSize={20}
                color="red"
              />
            </button>
          </div>
        ),
      },
    ],
    [isLGScreen]
  );

  const initialState = useMemo(() => {
    if (!isLGScreen) {
      return { hiddenColumns: ["icon-book", "n-pages"] };
    } else {
      return { hiddenColumns: [] };
    }
  }, [isLGScreen]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable<IBookAddedData>(
    { columns, data, initialState },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table
        {...getTableProps()}
        className="table-auto border border-gray-200 shadow-lg rounded-lg w-[95%] lg:w-[70%] bg-white"
      >
        <thead className="bg-gray-50 uppercase text-base text-gray-600 font-lato rounded-lg">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-4 py-2 text-left font-medium border-b border-gray-200"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="font-lato text-black">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 border-b border-gray-200 text-xs lg:text-sm"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BookTable;
