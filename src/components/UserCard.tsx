import Image from "next/image";
import React from "react";

const UserCard = ({
  title,
  number,
  date,
}: {
  title: string;
  number: string;
  date: string;
}) => {
  return (
    <div className="min-w-[49%] flex flex-col gap-3 p-4 rounded-lg odd:bg-blue-200 even:bg-yellow-200">
      <div className="flex justify-between items-center w-full">
        <span className="text-xs text-green-400 bg-white px-2 py-1 rounded-full">
          {date}
        </span>
        <Image src="/more.png" width={14} height={14} alt="more" />
      </div>
      <h2 className="text-xl font-bold">{number}</h2>
      <span className="text-gray-500 text-sm">{title}</span>
    </div>
  );
};

export default UserCard;