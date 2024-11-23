import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { announcementsData, role } from "@/lib/data";
import Image from "next/image";
import React from "react";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};
const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "text-right md:text-left",
  },
];

const AnnouncementListPage = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="text-sm border-b border-b-gray-200 odd:bg-gray-100 even:bg-slate-50"
    >
      <td className="flex items-center gap-2 p-4">{item.title}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="p-4">
        <div className="flex items-center justify-end md:justify-normal gap-2">
          {role === "admin" && (
            <>
              <FormModal table="announcement" type="update" data={item} />
              <FormModal table="announcement" type="delete" id={item.id} />
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
        <h2 className="hidden md:block text-lg font-semibold">All Announcements</h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4">
          <TableSearch />
          <div className="flex gap-4 self-end">
            <button className="w-8 h-8 flex justify-center items-center rounded-full bg-lameYellow">
              <Image src="/filter.png" width={14} height={14} alt="filter" />
            </button>
            <button className="w-8 h-8 flex justify-center items-center rounded-full bg-lameYellow">
              <Image src="/sort.png" width={14} height={14} alt="filter" />
            </button>
            {role === "admin" && <FormModal table="announcement" type="create" />}
          </div>
        </div>
      </div>
      {/* TABLE */}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AnnouncementListPage;
