import Image from "next/image";
export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen">
      <div className="hidden lg:flex w-5/6 flex-1 relative flex-col bg-purple-100 text-primary text-center pt-6 font-righteous">
        <p className="">Nice to see You again</p>
        <p className="text-[3rem] font-[700]">Welcome back</p>
        <div className="relative h-[80%] mt-auto">
          <Image src="/svg/discussion.svg" priority fill alt="" />
        </div>
      </div>
      <div className="lg:w-2/6 flex-1 py-4 px-4 lg:px-8">
        <div className="flex items-center font-righteous mb-4">
          <Image src="/svg/logo.svg" width={40} height={40} alt="site logo" priority />
          <span className="text-[1.5rem]">Apex Insights</span>
        </div>
        {children}
      </div>
    </main>
  );
}
