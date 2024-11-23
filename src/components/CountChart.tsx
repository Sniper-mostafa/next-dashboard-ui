"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#FFFFFF",
  },
  {
    name: "Boys",
    count: 57,
    fill: "#80ffdb",
  },
  {
    name: "Girls",
    count: 43,
    fill: "#ffea00",
  },
];

const CountChart = () => {
  return (
    <div className=" bg-white w-full h-full p-3 rounded-md">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Students</span>
        <Image src="/moreDark.png" width={18} height={18} alt="more" />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[70%]">
        <ResponsiveContainer>
          <RadialBarChart
            innerRadius="40%"
            outerRadius="100%"
            barSize={30}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          width={50}
          height={50}
          alt="count"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-10">
        <div className="flex flex-col gap-1">
          <span className="w-4 h-4 bg-lamaSky rounded-full" />
          <span className="font-bold">1,234</span>
          <span className="text-xs text-gray-300">Boys(55%)</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="w-4 h-4 bg-lameYellow rounded-full" />
          <span className="font-bold">1,234</span>
          <span className="text-xs text-gray-300">Boys(55%)</span>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
