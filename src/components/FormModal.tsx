"use client";

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentForm";

const forms: {
    [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />,
}

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor = type === "create" ? "bg-lameYellow" : type === "update" ? "bg-lamaSky" : "bg-lamaPurple"
  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
        <form action="" className="flex flex-col gap-4 p-4">
            <span className="text-center font-medium">All data will be lost. Are you sure you want to delete the {table}?</span>
            <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>
        </form>

    ) : type === "create" || type === "update" ? (
        forms[table](type, data)
    ) : ("Form not found!")
  }
  return ( 
  <>
    <button 
        onClick={()=> setOpen(true)}
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
    >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
    </button>
    {open && (
        <div className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-60 z-50">
            <div className="relative p-4 bg-white rounded-md w-[90%] md:w-[70%] lg:w-[60%] xl:[50%] 2xl:w-[40%]">
                <Form />
                <div 
                  onClick={()=> setOpen(false)}
                  className="absolute top-4 right-4 cursor-pointer" 
                >
                    <Image src="/close.png" width={14} height={14} alt="remove" />
                </div>
            </div>
        </div>
    )}
  </> );
};

export default FormModal;
