import React from "react";
import { Search, PlusCircle, Clock, Bell } from "lucide-react";
import logo from "./assets/logo.png";
import profile from "./assets/profile.jpg";

export default function Header() {
  return (
    <header id="overview" className="fixed top-0 w-full h-[50px] z-100 border border-black/5 bg-white flex items-center justify-between px-4 md:px-10">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={`${logo}`}
          alt="Logo"
          className="h-[34px] w-auto object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6">

        {/* Icons */}
        <div className="hidden sm:flex items-center gap-5">
          <Search className="w-5 h-5 text-black" />
          <PlusCircle className="w-5 h-5 text-black" />
          <Clock className="w-5 h-5 text-black" />
          <Bell className="w-5 h-5 text-black" />
        </div>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-[30px] h-[30px] rounded-full bg-[#993B3B] overflow-hidden">
            <img
              src={profile}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-[15px] font-normal text-black hidden md:block">
            Harshit
          </span>
        </div>

      </div>
    </header>
  );
}
