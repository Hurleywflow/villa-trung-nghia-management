"use client";
import Image from "next/image";
import { useContext } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Socials } from "./constants";

import ThemeContext from "@/context/themeContext";

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div className="fixed top-0 z-50 hidden h-[65px] w-full bg-[#03001417] px-10 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-sm md:block">
      <div className="m-auto flex h-full w-full flex-row items-center justify-between px-[10px]">
        <a
          href="#home"
          className="flex h-auto w-auto flex-row items-center text-tertiary-dark "
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer transition-all duration-100 hover:scale-105"
          />

          <span className="ml-[10px] hidden font-bold md:block ">
            TrungNghia
          </span>
        </a>

        <div className="flex h-full w-[400px] flex-row items-center justify-between md:mr-20">
          <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] text-gray-200">
            <a href="#home" className="cursor-pointer">
              Home
            </a>
            <a href="#villa" className="cursor-pointer">
              Villa
            </a>
            <a href="#services" className="cursor-pointer">
              Dich vu
            </a>
            <a href="#booking" className="cursor-pointer">
              Dat Phong
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
          {/* Items theme */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-500">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("hotel-theme");
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("hotel-theme", "true");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
