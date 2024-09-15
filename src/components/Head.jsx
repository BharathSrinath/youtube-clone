import React, { useEffect, useState } from "react";
import hamburgerIcon from "../assets/hamburger-menu-svgrepo-com.svg";
import searchIcon from "../assets/search-svgrepo-com.svg";
import userIcon from "../assets/user-circle-svgrepo-com.svg";
import youtubeIcon from "../assets/youtube-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/slices/SideBarSlice";
import {
  YOUTUBE_SUGGESTIONS_API,
  YOUTUBE_SEARCH_BY_QUERY,
  YOUR_PROJECT_CREDENTIAL_API_KEY,
} from "../utils/constants";
import { v4 as uuidv4 } from "uuid";
import { cachedResults } from "../store/slices/SearchCacheSlice.jsx";
import { useNavigate } from "react-router-dom";
// IMPORTANT: We have tried wrapping the entire search bar within Link component thinking once the search query is selected to will search for the query and take us to the results page. 
// In this process we have learnt that it doesnt work that way. Just imagine what happens when you click inside searchbar. Even before typing something it will take us to the resultspage. 
// You keep forgetting that Link is modified version of anchor tag with routing capabilities. So when you click, it will redirect us to the specified route in "to" path.
// So we use useNavigate to take us to the results page where we use useSearchParams to get the query and make the api call.
// Lesson learned: "NEVER WRAP INPUT ELEMENT WITHIN LINK COMPONENT"

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  // Buidling a feature to manually cache the API calls results
  // When you use RTkQ, these are taken care of.
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // caching
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
        // In getSearchSuggestions we will dispatch the cached results.
      }
    }, 200);
    // Make an API call for every key press.
    // But dont make an the Api call if the difference between 2 key press is < 200ms
    // This is known as debouncing

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const suggestionData = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const jsonSuggestionData = await suggestionData.json();
    setSuggestions(jsonSuggestionData[1]);
    dispatch(
      cachedResults({
        [searchQuery]: jsonSuggestionData[1],
      })
    );
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    setShowSuggestions(false);
    navigate("/results?search_query=" + searchQuery);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showSuggestions) {
        if (e.key === "ArrowDown") {
          setActiveSuggestionIndex(
            (prevIndex) =>
              prevIndex < suggestions.length - 1 ? prevIndex + 1 : -1
            // Once you have reached the last position and press ArrowDown, the position will again be set to -1 (that is search box itself).
          );
          // when you use the state setter function (like setActiveSuggestionIndex), you can pass either a new state value directly or a function. This function receives the previous state value as its argument. This is particularly useful when the new state depends on the previous state.
        } else if (e.key === "ArrowUp") {
          setActiveSuggestionIndex((prevIndex) =>
            prevIndex > -1 ? prevIndex - 1 : suggestions.length - 1
          );
        } else if (e.key === "Enter") {
          if (activeSuggestionIndex >= 0) {
            setSearchQuery(suggestions[activeSuggestionIndex]);
            handleSearch();
          } else {
            handleSearch();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, [showSuggestions, suggestions, activeSuggestionIndex]);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    handleSearch();
  };

  const toggleSideBarHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex justify-between m-2">
      <div className="flex items-center">
        <img
          className="h-6 cursor-pointer"
          src={hamburgerIcon}
          alt="sidebar menu icon"
          onClick={() => toggleSideBarHandler()}
        />
        <img className="h-6 w-36" src={youtubeIcon} alt="" />
      </div>
      <div className="w-1/2 relative self-center">
        <div className="flex ">
          <input
            type="text"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                handleSearch();
              }
            }}
            className="rounded-l-full border h-9 border-gray-300 w-2/3 p-2 pl-4 text-lg  focus:outline-none focus:border-blue-500 focus:border-2"
          />
          <button onClick={handleSearch} className="rounded-r-full border border-gray-300 border-l-0 p-1 bg-gray-100 h-9">
            <img className="h-6" src={searchIcon} alt="search icon" />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 w-2/3 rounded-lg cursor-default z-10">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={uuidv4()}
                  className={`py-2 px-3 shadow-sm hover:bg-gray-100 ${
                    index === activeSuggestionIndex ? "bg-gray-200" : ""
                  }`}
                  onMouseDown={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <img src={userIcon} alt="user icon" className="h-10 " />
    </div>
  );
};

export default Head;
