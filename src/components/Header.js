import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NetflixLogo, SUPPORTED_LANGUAGES, logo } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = () => {
    //Toggle gtp search
    dispatch(toggleGptSearch());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

        // ...
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NetflixLogo} alt="logo" />
      {user && (
        <div className="flex p-4">
          {showGptSearch && (
            <select
              className="mx-2 my-2 px-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white py-2 px-2 bg-red-500 mx-3 my-1 rounded-lg cursor-pointer "
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-12 h-12" alt="userIcon" src={logo} />
          <button
            onClick={handleSignOut}
            className="p-2 font-bold text-white hover:text-red-400"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
