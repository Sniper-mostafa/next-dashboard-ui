import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import Performance from '@/components/Performance';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const SingleTeacherPage = () => {
  return (
    <div className='flex flex-col flex-1 xl:flex-row gap-4 p-4'>
        {/* LEFT */}
        <div className='w-full xl:w-2/3'>
            {/* TOP */}
            <div className='flex flex-col lg:flex-row gap-4'>
                {/* USER CARD INFO */}
                <div className='flex flex-1 gap-4 p-4 bg-blue-100 rounded-md'>
                    <div className='w-1/3'>
                        <Image 
                            width={145} 
                            height={145} 
                            alt='user-image'
                            className='w-36 h-36 rounded-full object-cover' 
                            src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                        />
                    </div>
                    <div className='w-2/3 flex flex-col justify-between gap-4'>
                        <h2 className='font-semibold text-xl'>Anna Santiago</h2>
                        <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolores?</p>
                        <div className='flex flex-wrap items-center justify-between gap-2 text-xs font-medium'>
                            <div className='flex items-center w-full md:w-1/3  2xl:w-1/3 p-2 gap-2'>
                                <Image src="/blood.png" width={14} height={14} alt='blood' />
                                <span>A+</span>
                            </div>
                            <div className='flex items-center w-full md:w-1/3  2xl:w-1/3 p-2 gap-2'>
                                <Image src="/date.png" width={14} height={14} alt='date' />
                                <span>January 2025</span>
                            </div>
                            <div className='flex items-center w-full md:w-1/3  2xl:w-1/3 p-2 gap-2'>
                                <Image src="/mail.png" width={14} height={14} alt='mail' />
                                <span>user@gmail.com</span>
                            </div>
                            <div className='flex items-center w-full md:w-1/3  2xl:w-1/3 p-2 gap-2'>
                                <Image src="/phone.png" width={14} height={14} alt='phone' />
                                <span>+1 234 567</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SMALL CARD */}
                <div className='flex flex-wrap flex-1 justify-between gap-4'>
                    <div className='flex items-center w-full md:w-[48%] bg-white p-4 gap-4 rounded-md'>
                        <Image src="/singleAttendance.png" width={24} height={24} alt='attendance' />
                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold'>90%</span>
                            <span className='text-xs text-gray-500'>Attendance</span>
                        </div>
                    </div>
                    <div className='flex items-center w-full md:w-[48%] bg-white p-4 gap-4 rounded-md'>
                        <Image src="/singleBranch.png" width={24} height={24} alt='attendance' />
                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold'>5th</span>
                            <span className='text-xs text-gray-500'>Grade</span>
                        </div>
                    </div>
                    <div className='flex items-center w-full md:w-[48%] bg-white p-4 gap-4 rounded-md'>
                        <Image src="/singleLesson.png" width={24} height={24} alt='attendance' />
                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold'>17</span>
                            <span className='text-xs text-gray-500'>lessons</span>
                        </div>
                    </div>
                    <div className='flex items-center w-full md:w-[48%] bg-white p-4 gap-4 rounded-md'>
                        <Image src="/singleClass.png" width={24} height={24} alt='classes' />
                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold'>4A</span>
                            <span className='text-xs text-gray-500'>Classes</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className='h-[800px] mt-4 bg-white rounded-md'>
                <h2>Teacher&apos;s Schedule</h2>
                <BigCalendar />
            </div>
        </div>
        {/* RIGHT */}
        <div className='w-full xl:w-1/3'>
            <div className='bg-white p-4 rounded-md'>
                <h2 className='text-xl font-semibold'>Shortcuts</h2>
                <div className='flex flex-wrap gap-4 mt-4 text-xs text-gray-500'>
                    <Link href="/" className='p-3 bg-blue-50 rounded-md'>Teacher&apos;s Classes</Link>
                    <Link href="/" className='p-3 bg-blue-50 rounded-md'>Teacher&apos;s Students</Link>
                    <Link href="/" className='p-3 bg-blue-50 rounded-md'>Teacher&apos;s Lessons</Link>
                    <Link href="/" className='p-3 bg-blue-50 rounded-md'>Teacher&apos;s Exams</Link>
                    <Link href="/" className='p-3 bg-blue-50 rounded-md'>Teacher&apos;s Assignments</Link>
                </div>
            </div>
            <Performance />
            <Announcements />
        </div>
    </div>
  )
}

export default SingleTeacherPage;