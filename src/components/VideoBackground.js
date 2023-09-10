import React from "react";

import { useMovieTrailer } from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const key = trailerVideo?.[0]?.key;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          key +
          "?si=LW80LGTfk891py1Y?&autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        frameorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
