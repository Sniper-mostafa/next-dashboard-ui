"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    absent: 30,
    present: 70,
  },
  {
    name: "Tue",
    absent: 58,
    present: 42,
  },
  {
    name: "Wed",
    absent: 82,
    present: 18,
  },
  {
    name: "Thu",
    absent: 38,
    present: 62,
  },
  {
    name: "Fri",
    absent: 49,
    present: 51,
  },
];

const AttendanceChart = () => {
  return (
    <div className=" bg-white w-full h-full p-3 rounded-md">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Attendance</span>
        <Image src="/moreDark.png" width={18} height={18} alt="more" />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#d1d5db" }}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            tick={{ fill: "#d1d5db" }}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
          />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "20px" }}
          />
          <Bar
            dataKey="absent"
            fill="#ffea00"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="present"
            fill="#80ffdb"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
