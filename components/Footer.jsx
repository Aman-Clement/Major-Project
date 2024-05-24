import React from "react";
import Image from "next/image";
import UnoT from "@/assets/comps/UNO-Translate.svg";
import Unisys from "@/assets/comps/unisys.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-customGreen ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="mb-1">
            <span className="text-black font-medium">Read about</span>
            <a href="#" className="hover:underline text-black font-bold">
              {" "}
              UNO-Translate
            </a>
          </div>
          <div className="md:flex md:justify-between">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900">
                  Questions?
                </h2>
                <ul className="text-black font-medium">
                  <li className="mb-1">
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Translator
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Browser Extension
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900">
                  Contact Us
                </h2>
                <ul className="text-black font-medium">
                  <li className="mb-1">
                    <a href="#" className="hover:underline ">
                      Terms of Use
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Cookie Preference
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <Image src={UnoT} alt="Logo" />
              </a>
            </div>
          </div>

          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="#" className="hover:underline">
                UNO
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
