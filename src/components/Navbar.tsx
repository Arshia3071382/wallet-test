"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/../public/image/logo_dark.8e5c7ade 2.png";
import Container from "./Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <Container>
      <nav className="bg-white container mx-auto shadow-sm py-4 px-6 flex justify-between items-center flex-row ">
   
      <div className="flex items-center gap-6 flex-row"> 
        <div className="md:hidden">
          {isOpen ? (
            <X className="w-7 h-7 cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className="w-7 h-7 cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>

  
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Wallet Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

     
      <div className="hidden md:flex space-x-6  flex-row">
        <Link href="/" className="text-gray-700 hover:text-blue-600">صفحه اصلی</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">قیمت رمزارزها</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">مقالات</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">تماس با ما</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">سایر</Link>
      </div>

    
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden z-50">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">خانه</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">قیمت رمزارزها</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">مقالات</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">تماس با ما</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">سایر</Link>
        </div>
      )}

 
      <div className="flex items-center gap-4">
        <div className="hidden  items-center gap-2  lg:flex">
          <Image src="/image/Frame (1).svg" alt="menu" width={30} height={40} />
          <h5 className="mt-1">021-91008590</h5>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/image/Frame.png" alt="user" width={30} height={40} />
          <h5 className="mt-1">علی اسماعیلی</h5>
        </div>
      </div>
    </nav>
   </Container>
  );
}