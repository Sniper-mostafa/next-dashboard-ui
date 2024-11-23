import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import EventCalendar from '@/components/EventCalendar'
import Announcements from '@/components/Announcements'
const AdminPage = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-5 justify-between p-4'>
      {/* LEFT */}
      <div className='w-full xl:w-[60%] flex flex-col gap-5'>
        {/* CARDS */}
        <div className=' flex flex-col md:flex-row flex-wrap justify-between gap-2'>
          <UserCard title="Students" number="1,049" date="2024/25" />
          <UserCard title="Teachers" number="1,938" date="2024/25" />
          <UserCard title="Parents" number="1,092" date="2024/25" />
          <UserCard title="Staffs" number="1,890" date="2024/25" />
        </div>
        {/* TOP CHART */}
        <div className='flex flex-col md:flex-row gap-4'>
          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-[350px]'>
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className='w-full lg:w-2/3 h-[350px]'>
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOB CHART */}
        <div className='w-full h-[350px]'>
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full xl:w-[39%]'>
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}

export default AdminPage;