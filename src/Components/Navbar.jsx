import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileDrawerOper, setMobileDrawerOper] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOper(!mobileDrawerOper);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOper ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOper && (
          <div className="fixed flex-col right-0 top-[65px] z-20 bg-neutral-900 w-full p-12 flex justify-center items-center lg:hidden">
            <ul>
                {navItems.map((item, index)=>(
                    <li key={index} className="py-4">
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="flex space-x-6 mt-5 ">
                <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                <a href="#" className="py-2 px-3 bg-gradient-to-r rounded-md from-orange-500 to-orange-800">Create an account</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
