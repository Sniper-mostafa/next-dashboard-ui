import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Announcements</h2>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-2 p-3 rounded-md bg-blue-100">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold ">Lorem, ipsum dolor.</h3>
          <span className="text-[10px] tFext-gray-400 px-2 py-1 rounded-md bg-white">
            2024-01-10
          </span>
        </div>
        <p className="text-xs font-medium text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          ratione esse porro eius quam adipisci?
        </p>
      </div>
      <div className="flex flex-col gap-2 p-3 rounded-md bg-yellow-100">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold ">Lorem, ipsum dolor.</h3>
          <span className="text-[10px] text-gray-400 px-2 py-1 rounded-md bg-white">
            2024-01-10
          </span>
        </div>
        <p className="text-xs font-medium text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          ratione esse porro eius quam adipisci?
        </p>
      </div>
      <div className="flex flex-col gap-2 p-3 rounded-md bg-red-100">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold ">Lorem, ipsum dolor.</h3>
          <span className="text-[10px] text-gray-400 px-2 py-1 rounded-md bg-white">
            2024-01-10
          </span>
        </div>
        <p className="text-xs font-medium text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          ratione esse porro eius quam adipisci?
        </p>
      </div>
    </div>
  );
};

export default Announcements;
