export const logo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU";

export const NetflixLogo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
  method: "GET",
  headers: { accept: "application/json" },
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2M3YzBhMzUyYzI5MzcwZWVhY2VmY2VkYjgwNmQ4OSIsInN1YiI6IjYyZDE2ZTUyYWY0MzI0MDA0YzhiMWI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ms91XwpylpqJiV9gO6YdLzu-OZbIOdxSozYWehR2OR8",
};
export const API_KEY = "acc7c0a352c29370eeacefcedb806d89";
export const MOVIE_URL = `https://api.themoviedb.org/3/movie/now_playing?page=2&api_key=${API_KEY}`;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=3&api_key=${API_KEY}`;
export const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?language=en-IND&page=4&api_key=${API_KEY}`;
export const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2&api_key=${API_KEY}`;
export const BG_NETFLIX_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "german", name: "German" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "portuguese", name: "Portuguese" },
  { identifier: "french", name: "French" },
];
