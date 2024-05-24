"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Arrows from "./arrows.svg";
import { render } from "react-dom";

const Translate = () => {
  const [selectedSourceLanguage, setSelectedSourceLanguage] = useState("");
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState("");
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceEmotion, setSourceEmotion] = useState([]);
  const [translatedEmotion, setTranslatedEmotion] = useState([]);
  const [similarityScore, setSimilarityScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [switchingLanguages, setSwitchingLanguages] = useState(false);

  const handleLanguageChange = (event, languageType) => {
    if (languageType === "source") {
      setSelectedSourceLanguage(event.target.value);
      setTranslatedText("");
      setSimilarityScore(0);
      setAttempts(0);
      setSourceEmotion([]);
      setTranslatedEmotion([]);
    } else {
      setSelectedTargetLanguage(event.target.value);
      setTranslatedText("");
      setSimilarityScore(0);
      setAttempts(0);
      setSourceEmotion([]);
      setTranslatedEmotion([]);
    }
  };

  async function AtoB() {
    setTranslatedText("");
    setSourceEmotion([]);
    setTranslatedEmotion([]);
    setSimilarityScore(0);
    setAttempts(0);
    const response = await fetch(
      `http://127.0.0.1:5000/translate/${selectedSourceLanguage}/to/${selectedTargetLanguage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: sourceText }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      detectEmotion(sourceText, setSourceEmotion, selectedSourceLanguage);
      detectEmotion(data.response, setTranslatedEmotion, selectedTargetLanguage);
      setTranslatedText(data.response);
      setSimilarityScore(data.score);
      setAttempts(data.attempts);
    } else {
      console.error("Failed to fetch translation:", response.statusText);
    }
  }

  const SwitchLanguages = () => {
    const tempLanguage = selectedSourceLanguage;
    setSelectedSourceLanguage(selectedTargetLanguage);
    setSelectedTargetLanguage(tempLanguage);
    setSwitchingLanguages(true);
  };

  useEffect(() => {
    if (switchingLanguages) {
      setTranslatedText('');
      setSimilarityScore(0);
      setAttempts(0);
      setSourceEmotion([]);
      setTranslatedEmotion([]);
      setSwitchingLanguages(false);
    }
  }, [selectedSourceLanguage, selectedTargetLanguage, switchingLanguages]);

  async function detectEmotion(text, setEmotion, language) {
    const response = await fetch(
      `http://127.0.0.1:5000/detect-emotions/${language}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      setEmotion(data);
    } else {
      console.error("Failed to detect emotion:", response.statusText);
    }
  }

  const copyTranslatedText = () => {
    const textarea = document.getElementById("translatedmessage");
    if (textarea) {
      textarea.select();
      document.execCommand("copy");
      alert("Text copied to clipboard!");
    }
  };

  const renderEmotion = (emotion) => {
    return (
      <div>
        {emotion.map((item, index) => (
          <div key={index} className="flex items-center mt-2">
            <span className="mr-2">{item.emoji}</span>
            <span className="mr-2">{item.label}</span>
            <span>{item.score}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="text-center text-3xl font-bold text-customGreen">
        Bi-Directional Translation
      </div>
      <div className="flex flex-row items-center mt-4">
        <div className="w-80 ml-8">
          <select
            id="source_language"
            onChange={(e) => handleLanguageChange(e, "source")}
            value={selectedSourceLanguage}
            className="block p-3 w-full text-sm text-green-900 font-semibold bg-gray-50 rounded-lg border border-gray-300"
          >
            <option value="">Select Source Language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            {/* Add other languages as needed */}
          </select>
        </div>
        <div className="m-4">
          <button
            onClick={SwitchLanguages}
            className="inline-flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <img src={Arrows} width={32} height={32} alt="Translate image" />
          </button>
        </div>
        <div className="w-80 mr-8">
          <select
            id="target_language"
            onChange={(e) => handleLanguageChange(e, "target")}
            value={selectedTargetLanguage}
            className="block p-3 w-full text-sm text-green-900 font-semibold bg-gray-50 rounded-lg border border-gray-300"
          >
            <option value="">Select Target Language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            {/* Add other languages as needed */}
          </select>
        </div>
      </div>
      <div className="flex flex-row items-center mt-4">
        <div className="card rounded-none w-96">
          <div className="card-body items-center text-center">
            <textarea
              id="message"
              rows="7"
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter text here"
            ></textarea>
          </div>
        </div>
        <div className="card rounded-none w-96">
          <div className="card-body items-center text-center">
            <textarea
              id="translatedmessage"
              rows="7"
              value={translatedText}
              onChange={(e) => setTranslatedText(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Translated text"
            ></textarea>
            <button
              onClick={copyTranslatedText}
              className="inline-flex items-center justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-green-600 hover:bg-blue-700"
            >
              Copy Translated Text
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-lg font-semibold mb-4">
        Similarity Score: {similarityScore}%
      </div>
      <div className="text-center text-white text-lg font-semibold mb-4">
        Attempts Taken: {attempts}
      </div>
      <div className="flex flex-row items-center mt-4">
        <div className="card rounded-none w-96">
          <div className="card-body items-center text-center">
            <div className="text-center text-black text-lg font-semibold mb-4">
              Source Emotion
            </div>
            {renderEmotion(sourceEmotion)}
          </div>
        </div>
        <div className="card rounded-none w-96">
          <div className="card-body items-center text-center">
            <div className="text-center text-black text-lg font-semibold mb-4">
              Translated Emotion
            </div>
            {renderEmotion(translatedEmotion)}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-4">
        <button
          onClick={AtoB}
          className="py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-green-600 hover:bg-blue-700"
        >
          Translate
        </button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("app");
render(<Translate />, rootElement);
