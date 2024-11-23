import React from "react";

const Pagination = () => {
  return (
    <div className="p-4 flex justify-between text-gray-500">
      <button className="px-4 py-2 text-xs bg-slate-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </button>
      <div className="fle gap-2 text-sm">
        <button className="px-2 rounded-sm">1</button>
        <button className="px-2 rounded-sm bg-lamaSky">2</button>
        <button className="px-2 rounded-sm">...</button>
        <button className="px-2 rounded-sm">4</button>
      </div>
      <button className="px-4 py-2 text-xs bg-slate-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
