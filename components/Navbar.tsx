import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-around items-center bg-transparent text-black text-4xl font-medium py-8">
      <Link href={"/"}>Kushal</Link>
      <Link href={"/index"}>Index</Link>
      <Link href={"/studio"}>Studio</Link>
      <Link href={"/research"}>Research</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  )
}

export default Navbar
