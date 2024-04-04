import React from "react";
import Image from "next/image";
import Logo from "@/assets/navbar/UNO.png";

const Navbar = () => {
  return (
    <nav className="bg-customBrown  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={Logo} width={32} height={32} alt="Flowbite Logo" />
          <span className="self-center text-2xl text-customGreen font-semibold whitespace-nowrap dark:text-customGreen">
            UNO - Translate
          </span>
        </a>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-customGreen rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/translate"
                className="block py-2 px-3 text-customGreen rounded md:hover:bg-transparent md:p-0 dark:border-gray-700"
              >
                Translator
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-customGreen rounded md:hover:bg-transparent md:p-0 dark:border-gray-7000"
              >
                Browser Extension
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-customGreen rounded md:hover:bg-transparent md:p-0 dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
