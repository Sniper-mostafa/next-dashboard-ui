import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import UserCard from "@/components/UserCard";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-14 lg:w-52 p-4">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo.png" width={32} height={32} alt="logo" />
          <span className="hidden lg:block text-xl font-semibold">School</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-full bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        <div className="flex flex-col xl:flex-row gap-5 justify-between p-4">
          {/* LEFT */}
          <div className="w-full xl:w-[60%] flex flex-col gap-5">
            {/* CARDS */}
            <div className=" flex flex-col md:flex-row flex-wrap justify-between gap-2">
              <UserCard title="Students" number="1,049" date="2024/25" />
              <UserCard title="Teachers" number="1,938" date="2024/25" />
              <UserCard title="Parents" number="1,092" date="2024/25" />
              <UserCard title="Staffs" number="1,890" date="2024/25" />
            </div>
            {/* TOP CHART */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* COUNT CHART */}
              <div className="w-full lg:w-1/3 h-[350px]">
                <CountChart />
              </div>
              {/* ATTENDANCE CHART */}
              <div className="w-full lg:w-2/3 h-[350px]">
                <AttendanceChart />
              </div>
            </div>
            {/* BOTTOB CHART */}
            <div className="w-full h-[350px]">
              <FinanceChart />
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full xl:w-[39%]">
            <EventCalendar />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
