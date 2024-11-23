import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";
import React from "react";

type Classe = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};
const columns = [
  {
    header: "Class Name",
    accessor: "class",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "text-right md:text-left",
  },
];

const ClasseListPage = () => {
  const renderRow = (item: Classe) => (
    <tr
      key={item.id}
      className="text-sm border-b border-b-gray-200 odd:bg-gray-100 even:bg-slate-50"
    >
      <td className="flex items-center gap-2 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td className="p-4">
        <div className="flex items-center justify-end md:justify-normal gap-2">
          {role === "admin" && (
            <>
              <FormModal table="class" type="update" data={item} />
              <FormModal table="class" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white m-4 mt-0 p-4 rounded-md">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h2 className="hidden md:block text-lg font-semibold">All Classes</h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4">
          <TableSearch />
          <div className="flex gap-4 self-end">
            <button className="w-8 h-8 flex justify-center items-center rounded-full bg-lameYellow">
              <Image src="/filter.png" width={14} height={14} alt="filter" />
            </button>
            <button className="w-8 h-8 flex justify-center items-center rounded-full bg-lameYellow">
              <Image src="/sort.png" width={14} height={14} alt="filter" />
            </button>
            {role === "admin" && <FormModal table="class" type="delete" />}
          </div>
        </div>
      </div>
      {/* TABLE */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ClasseListPage;
