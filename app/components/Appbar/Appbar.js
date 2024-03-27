"use client";
import LogoImage from "@/public/logo-image.png";
export default function Appbar({ appConfig }) {
  const { BackgroundColor, TextColor, ButtonColor } = appConfig;
  return (
    <nav
      className={`w-full bg-${BackgroundColor.primary} h-16 p-2 flex justify-between items-center shadow-md`}
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
      <div className="auth-buttons text-lg text hidden md:inline md:flex md:gap-3 ">
        <button
          className={`border-2 ${ButtonColor.border} p-1 rounded-[40px] w-24 text-blue-600 hover:bg-slate-100 ease-in-out duration-300 `}
        >
          Login
        </button>
        <button
          className={`${ButtonColor.primary} p-1 rounded-[40px] w-24 text-white hover:bg-blue-800 ease-in-out duration-300`}
        >
          SignUp
        </button>
      </div>

      <div className="mobile-side-bar md:hidden"></div>
    </nav>
  );
}
