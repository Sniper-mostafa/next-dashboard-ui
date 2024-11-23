import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {children}
      </div>
    </div>
  );
}
