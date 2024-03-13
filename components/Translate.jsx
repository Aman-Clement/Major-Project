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
      <div class="grid grid-cols-3 gap-4">
        <a
          href="/translate"
          className="py-2 px-2 pl-40 inline-flex items-center gap-x-1 text-xs font-semibold" // Adjust padding and font size
        >
          <Image src={USA} />
        </a>
        <a
          href="/translate"
          className="py-4 px-4 my-auto w-16 h-16 mx-auto inline-flex items-center rounded-full gap-x-1 text-xs font-semibold bg-customGreen" // Adjust padding and font size
        >
          <Image src={bidirection} />
        </a>
        {/* <a
          className="w-10 inline-flex items-center gap-x-1 px-auto
                       bg-blue-500 hover:bg-red-500 text-white"
        >
          <Image src={bidirection} />
        </a> */}
        <a
          href="/translate"
          className="py-2 px-2 pr-40 inline-flex items-center gap-x-1 text-xs font-semibold" // Adjust padding and font size
        >
          <Image src={France} />
        </a>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            {/* <h2 className="card-title">Select Language!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p> */}
            {/* <details className="dropdown">
              <summary className="m-1 btn btn-primary">English</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details> */}
            {/* <h2 className="card-title">Your Message:</h2> */}
            <textarea
              id="message"
              rows="10"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
              placeholder="Enter text here..."
              sx={"height: auto; resize: vertical;"}
            ></textarea>

            {/* <h2 className="card-title">Select Target Language!</h2> */}
            {/* <details className="dropdown">
              <summary className="m-1 btn btn-primary">Spanish</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Spanish</a>
                </li>
                <li>
                  <a>French</a>
                </li>
                <li>
                  <a>Japanese</a>
                </li>
              </ul>
            </details> */}
            <a
              href="#translate"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Translate
              {/* <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg> */}
            </a>
          </div>
        </div>
        {/* <div className="mx-auto my-auto hover:cursor-pointer ">
          <div
            id="translate"
            className="rrounded-lg border-1 border-solid border-white text-4xl mb-10 font-extrabold text-black dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          >
            Translate
          </div>
        </div> */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            {/* <h2 className="card-title text-green-500">Translated Message!</h2> */}
            <textarea
              id="translatedmessage"
              rows="10"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
              placeholder="Translated Message..."
              sx={"height: auto; resize: vertical;"}
            ></textarea>
            <a
              href="#translate"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Copy
              {/* <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg> */}
            </a>

            {/* <details className="dropdown">
              <summary className="m-1 btn btn-primary">open or close</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details> */}
            {/* <div className="mt-8">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      alt="Tailwind CSS chat bubble component"
                      src={Subject}
                    />
                  </div>
                </div>
                <div className="chat-header ml-1">Subject ABC</div>
                <div className="chat-bubble">Don't push your luck! 😠</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image alt="Tailwind CSS chat bubble component" src={UNO} />
                  </div>
                </div>
                <div className="chat-header mr-1">UNO</div>
                <div className="chat-bubble">No fuerces tu suerte. 😠!</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>
            </div> */}

            {/* <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
