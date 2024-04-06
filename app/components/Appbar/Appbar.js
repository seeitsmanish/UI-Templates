"use client";
import { Fragment, useState } from "react";
import Button from "../Button/Button";
import LogoImage from "@/public/logo-image.png";

export default function Appbar() {
  const [sidebarVisible, setSideBarVisible] = useState(false);

  function toggleSidebar() {
    setSideBarVisible((prev) => prev ^ 1);
  }
  return (
    <Fragment>
      <nav className="w-full bg-skin-primary text-primary h-16 p-2 flex justify-between items-center shadow-md">
        <div className="logo-container flex items-center gap-1">
          <img
            src={LogoImage.src}
            alt="Logo"
            className="h-12 w-12 md:h-9 md:w-9"
          />
          <span className="text-2xl font-lg hidden md:inline">Logo</span>
        </div>
        {/* These are for ipad and laptops */}
        <div className="nav-links hidden md:block">
          <ul className="flex text-xl gap-5 font-medium">
            <li className="hover:text-primary-hover duration-300 hover:cursor-pointer">
              Home
            </li>
            <li className="hover:text-primary-hover duration-300 hover:cursor-pointer">
              Services
            </li>
            <li className="hover:text-primary-hover duration-300 hover:cursor-pointer">
              Subscription
            </li>
          </ul>
        </div>
        <div className="auth-buttons text-lg text hidden  md:flex md:gap-3 ">
          <Button
            variant="primary"
            size="md"
            className="ease-in-out duration-300 w-[100px]"
          >
            Login
          </Button>

          <Button
            variant="outline"
            size="md"
            className="ease-in-out duration-300 w-[100px]"
          >
            Signup
          </Button>
        </div>

        <div className="toggle-button-for-menu p-2 md:hidden">
          <Button
            variant={sidebarVisible ? "secondary" : "primary"}
            size="sm"
            className="w-[50px] h-[40px] duration-300 text-xl"
            onClick={toggleSidebar}
          >
            {/* You can replace this with your icon */}
            {sidebarVisible ? "X" : "☰"}
          </Button>
        </div>
      </nav>
      {sidebarVisible ? (
        <div
          className={`toggle-menu-for-mobile text-primary font-semibold bg-skin-primary h-screen ${
            sidebarVisible ? "border-outline border-t-2" : ""
          } md:hidden`}
        >
          <ul className="w-full h-full text-xl ">
            <li className="p-2 border-b-2 border-outline border-dashed active:bg-secondary">
              Login
            </li>
            <li className="p-2 border-b-2 border-outline border-dashed active:bg-secondary">
              Signup
            </li>
            <li className="p-2 border-b-2 border-outline border-dashed active:bg-secondary">
              Home
            </li>
            <li className="p-2 border-b-2 border-outline border-dashed active:bg-secondary">
              Services
            </li>
            <li className="p-2 border-b-2 border-outline border-dashed active:bg-secondary">
              Subscription
            </li>
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
}
