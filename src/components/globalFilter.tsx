import React from "react";
import { HiSearch } from "react-icons/hi";

interface GlobalFilterProps {
  filter: string;
  setFilter: (value: string | undefined) => void;
}

export const GlobalFilter: React.FC<GlobalFilterProps> = ({
  filter,
  setFilter,
}) => {
  return (
    <span className="relative mx-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by Author/Name"
        className="pl-8 pr-2 py-1 border border-gray-300 rounded focus:outline-none font-raleway"
      />
      <HiSearch className="absolute inset-y-0 left-0 w-4 h-4 my-auto ml-2 text-gray-500 pointer-events-none" />
    </span>
  );
};
