'use client';

import React from "react";
import Link from "next/link";

type NavbarProps = {
  onContactClick?: () => void;
};

const Navbar = ({ onContactClick }: NavbarProps) => {
  return (
    <div className="fixed w-full z-50 flex justify-around items-center bg-transparent text-black text-4xl font-medium py-8">
      <Link href={"/"}>Kushal</Link>
      <Link href={"/index"}>Index</Link>
      <Link href={"/studio"}>Studio</Link>
      <Link href={"/research"}>Research</Link>
      {onContactClick ? (
        <button type="button" onClick={onContactClick} className="font-medium">
          Contact
        </button>
      ) : (
        <Link href={"/contact"}>Contact</Link>
      )}
    </div>
  );
};

export default Navbar
