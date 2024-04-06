"use client";
import Button from "../Button/Button";
import LogoImage from "@/public/logo-image.png";
export default function Appbar() {
  return (
    <nav
      className={`w-full bg-white h-16 p-2 flex justify-between items-center shadow-md`}
    >
      <div className="logo-container flex items-center gap-1">
        <img
          src={LogoImage.src}
          alt="Logo"
          className="h-12 w-12 md:h-9 md:w-9"
        />
        <span className="text-2xl font-lg hidden md:inline">Logo</span>
      </div>

      <div className="nav-links hidden md:block">
        <ul className={`flex text-xl gap-5`}>
          <li className="hover:text-gray-400 hover:cursor-pointer">Home</li>
          <li className="hover:text-gray-400 hover:cursor-pointer">Services</li>
          <li className="hover:text-gray-400 hover:cursor-pointer">
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

      <div className="mobile-side-bar md:hidden"></div>
    </nav>
  );
}
