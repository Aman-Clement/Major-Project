"use client";
import React from "react";
import { useState } from "react";


const Translate = () => {
  const [selectedSourceLanguage, setSelectedSourceLanguage] = useState("");
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleLanguageChange = (event, languageType) => {
    if (languageType === "source") {
      console.log("change")
      setSelectedSourceLanguage(event.target.value);
    } else {
      console.log("change");
      setSelectedTargetLanguage(event.target.value);
    }
  };

  async function AtoB (){
    console.log("AtoB function called!");
    const translatedText = await fetch(
      `http://127.0.0.1:5000/translate/to/${selectedSourceLanguage}/${selectedTargetLanguage}`
    );
    setTranslatedText(translatedText);
  } 

  return (
    <div>
      <div className="text-center text-3xl font-bold text-customGreen">
        Bi-Directional Translate
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <select
              id="source_language"
              onChange={(e) => handleLanguageChange(e, "source")}
              className="block p-3 w-full text-sm text-green-900 font-semibold bg-gray-50 rounded-lg border border-gray-300"
            >
              <option value="">Select Source Language</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="ar">Arabic</option>
              <option value="zh">Chinese</option>
              <option value="pt">Portuguese</option>
              <option value="ja">Japanese</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="ko">Korean</option>
              <option value="tr">Turkish</option>
              <option value="vi">Vietnamese</option>
              <option value="th">Thai</option>
              <option value="pl">Polish</option>
              <option value="uk">Ukrainian</option>
              <option value="bn">Bengali</option>
              <option value="bn">Kannada</option>
              <option value="bn">Tamil</option>
            </select>

            <textarea
              id="message"
              rows="10"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Enter text here..."
              sx={"height: auto; resize: vertical;"}
            ></textarea>

            <select
              id="target_language"
              onChange={(e) => handleLanguageChange(e, "target")}
              className="block p-3 w-full text-sm text-green-900 font-semibold bg-gray-50 rounded-lg border border-gray-300"
            >
              <option value="">Select Target Language</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="ar">Arabic</option>
              <option value="zh">Chinese</option>
              <option value="pt">Portuguese</option>
              <option value="ja">Japanese</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="ko">Korean</option>
              <option value="tr">Turkish</option>
              <option value="vi">Vietnamese</option>
              <option value="th">Thai</option>
              <option value="pl">Polish</option>
              <option value="uk">Ukrainian</option>
              <option value="bn">Bengali</option>
              <option value="bn">Kannada</option>
              <option value="bn">Tamil</option>
            </select>

            <div
              onClick={() => {
                console.log("Translate button clicked!");
                AtoB();
              }}
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Translate
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <textarea
              id="translatedmessage"
              rows="15"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Translated Message..."
              sx={"height: auto; resize: vertical;"}
            ></textarea>
            <a
              href="#translate"
              className="py-3 mt-1 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
