import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black px-2 py-2 w-20 mx-2 rounded-md bg-opacity-80 hover:opacity-50">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white px-2 py-2 w-30 mx-2 rounded-md bg-opacity-90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
