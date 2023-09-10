import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  return (
    <div className="pt-[8%] flex  justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 rounded-md">
        <input
          type="text"
          className="p-4 m-4 col-span-9 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 mx-3 my-3 bg-red-700 rounded-md text-white col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;