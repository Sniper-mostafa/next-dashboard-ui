import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 border px-2 rounded-full ring-1">
      <Image src="/search.png" width={16} height={16} alt="search" />
      <input
        placeholder="Search..."
        type="text"
        className="text-xs bg-transparent p-2 outline-none"
      />
    </div>
  );
};

export default TableSearch;
