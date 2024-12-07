import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
//import { AiFillSun, AiFillMoon } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { ContextGlobal } from "../Context/global.context";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex  justify-between md:justify-around items-center w-full h-16 bg-gray-100 dark:bg-black px-4 md:px-8">
      <div>
        <h1 className="text-gray-900 font-medium text-lg dark:text-white">
          <span className="text-blue-600">Dental Clinic DH </span>
        </h1>
      </div>

      <button
        className="md:hidden text-gray-900 dark:text-white"
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? (
          <IoCloseSharp className="text-3xl" />
        ) : (
          <CgMenuLeftAlt className="text-3xl" />
        )}
      </button>

      <nav
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-4 absolute md:static top-16 left-0 right-0 bg-white dark:bg-[#252e38] md:bg-transparent md:w-auto transition-all duration-300 ease-in-out md:h-auto ${
          isMenuOpen ? "h-screen" : "h-0 overflow-hidden"
        }`}
      >
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-cyan-600 font-medium"
                : "text-gray-900 hover:text-[#888888] dark:text-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-cyan-600 font-medium"
                : "text-gray-900 hover:text-[#888888] dark:text-white"
            }`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/favs"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-cyan-600 font-medium"
                : "text-gray-900 hover:text-[#888888] dark:text-white"
            }`
          }
        >
          Favorite
        </NavLink>

        <button
          className="bg-black dark:bg-white p-1 rounded-md"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <BsMoonFill size={20} className="text-gray-100" />
          ) : (
            <BsSunFill size={20} className="text-gray-500" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
