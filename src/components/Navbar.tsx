import Image from "next/image";
import React from "react";
import TableSearch from "./TableSearch";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* SEARCH BAR */}
      <div className="hidden lg:flex">
        <TableSearch />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="w-7 h-7 flex justify-center items-center bg-white rounded-full">
          <Image src="/message.png" width={20} height={20} alt="message" />
        </div>
        <div className="relative w-7 h-7 flex justify-center items-center bg-white rounded-full">
          <Image src="/announcement.png" width={20} height={20} alt="message" />
          <span className="w-5 h-5 flex justify-center items-center absolute -right-3 -top-3 text-xs text-white bg-purple-500 rounded-full">
            1
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">Admin Name</span>
          <span className="text-[10px] text-right text-gray-500">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          width={36}
          height={36}
          alt="avatar"
          className="rounded-full"
        />
      </div>
      {/* TOPCHARTS */}
    </div>
  );
};

export default Navbar;
