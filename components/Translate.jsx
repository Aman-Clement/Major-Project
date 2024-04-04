import React from "react";
import Subject from "@/assets/comps/Subject1234.png";
import UNO from "@/assets/comps/UNO.png";
import Image from "next/image";
import bidirection from "@/assets/comps/bidirection.svg";
import USA from "@/assets/comps/USA.svg";
import France from "@/assets/comps/France.svg";

const Translate = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <a
          href="/translate"
          className="py-2 px-2 pl-40 inline-flex items-center gap-x-1 text-xs font-semibold" // Adjust padding and font size
        >
          <Image src={USA} />
        </a>
        <a
          href="/translate"
          className="py-2 px-2 pr-40 inline-flex items-center gap-x-1 text-xs font-semibold" // Adjust padding and font size
        >
          <Image src={France} />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <select
              id="source-language"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            >
              <option value="">Select Source Language</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
              {/* Add other language options here */}
            </select>

            <textarea
              id="message"
              rows="10"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Enter text here..."
              sx={"height: auto; resize: vertical;"}
            ></textarea>

            <select
              id="target-language"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            >
              <option value="">Select Target Language</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              {/* Add other language options here */}
            </select>

            <a
              href="#translate"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Translate
            </a>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <textarea
              id="translatedmessage"
              rows="10"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Translated Message..."
              sx={"height: auto; resize: vertical;"}
            ></textarea>
            <a
              href="#translate"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Copy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
