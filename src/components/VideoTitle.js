import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white px-2 py-2 w-20 mx-2 rounded-md bg-opacity-50">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-black px-2 py-2 w-30 mx-2 rounded-md bg-opacity-10">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
