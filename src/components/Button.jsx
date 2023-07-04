"use client";
export default function Button({type, onClick}) {
  return (
    <button type={type} onClick={onClick} className="h-full w-full bg-primary text-white rounded-md text-[1.2rem] font-[600] font-inter hover:bg-[#86198f] transition-colors duration-200">
      Sign In
    </button>
  );
}
