"use client";

import { useState } from "react";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://flagpedia.net/data/flags/h80/gb.png",
  },
  {
    code: "ru",
    name: "Русский",
    flag: "https://flagpedia.net/data/flags/h80/ru.png",
  },
  {
    code: "zh",
    name: "中文",
    flag: "https://flagpedia.net/data/flags/h80/cn.png",
  },
  {
    code: "ja",
    name: "日本語",
    flag: "https://flagpedia.net/data/flags/h80/jp.png",
  },
];

export function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-full h-10 w-10 transition-colors focus:outline-none"
      >
        <img
          src={selectedLang.flag}
          alt={selectedLang.name}
          className="w-6 h-6 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
              }}
              className="flex items-center w-full text-left px-3 py-2 text-white hover:bg-gray-700 transition-colors"
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-4 h-4 rounded-full mr-2"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
