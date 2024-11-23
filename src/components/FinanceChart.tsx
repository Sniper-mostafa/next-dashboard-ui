"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3200,
    expense: 1200,
  },
  {
    name: "Mar",
    income: 4135,
    expense: 3249,
  },
  {
    name: "Apr",
    income: 3490,
    expense: 2449,
  },
  {
    name: "May",
    income: 3791,
    expense: 2495,
  },
  {
    name: "Jun",
    income: 1056,
    expense: 1947,
  },
  {
    name: "Jul",
    income: 3126,
    expense: 2498,
  },
  {
    name: "Aug",
    income: 2190,
    expense: 4691,
  },
  {
    name: "Sep",
    income: 3495,
    expense: 2498,
  },
  {
    name: "Oct",
    income: 1978,
    expense: 2165,
  },
  {
    name: "Nov",
    income: 3492,
    expense: 1054,
  },
  {
    name: "Dec",
    income: 1975,
    expense: 3021,
  },
];

const FinanceChart = () => {
  return (
    <div className=" bg-white w-full h-full p-3 rounded-md">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Finance</span>
        <Image src="/moreDark.png" width={18} height={18} alt="more" />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "20px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#80ffdb"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ffea00"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
