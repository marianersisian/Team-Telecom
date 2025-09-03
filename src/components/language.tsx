import React from "react";

interface LanguageProps {
  language: Record<string, string>;
}

const Language: React.FC<LanguageProps> = ({ language }) => {
  const handleTranslate = (langCode: string) => {
    const url = `https://translate.google.com/translate?sl=auto&tl=${langCode}&u=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex items-center">
      {Object.entries(language).map(([key, label], index, arr) => (
        <div
          key={key}
          onClick={() => handleTranslate(key)}
          className={`cursor-pointer px-4 hover:text-[#F04D4D] transition duration-500 ${index < arr.length - 1 ? "border-r border-r-[rgb(89,97,105)]" : ""}`}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default Language;
