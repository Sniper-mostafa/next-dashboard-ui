"use client";
import Image from "next/image";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 90, fill: "#C3EBFA" },
  { name: "Group B", value: 10, fill: "#FAE27C" },
];

const Performance = () => {
  return (
    <div className="bg-white p-4 h-72 rounded-md relative">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Performance</h2>
        <Image src="/moreDark.png" width={16} height={16} alt="more-icon" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <span className="text-3xl font-semibold">9.2</span>
        <span className="text-xs text-gray-300">of 10 max LTS</span>
      </div>
      <div className="font-medium absolute bottom-10 left-1/2 -translate-x-1/2">
        1st Semester - 2nd Semester
      </div>
    </div>
  );
};

export default Performance;
