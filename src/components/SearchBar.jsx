import React, { useState } from "react";

const SearchBar = ({ searchText, setSearchText, filter, setFilter }) => {
  // eslint-disable-next-line
    const [suggestions, setSuggestions] = useState([
    "How to Excel in JavaScript",
    "Maintaining a Healthy Work-Life Balance",
    "Top Business Destinations for Professionals",
    "AI for Professionals: A Beginner's Guide",
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchText(value);
    // Show suggestions if there is input and matching suggestions exist
    setShowSuggestions(
      value.trim() !== "" &&
        suggestions.some((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        )
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Page Title */}
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-semibold text-white">Search Blog Posts</h1>
        <p className="text-gray-200 text-lg mt-2">
          Explore insightful articles on technology, lifestyle, travel, and
          more.
        </p>
      </header>

      <div className="relative mb-8">
        {/* Search Input */}
        <input
          type="text"
          value={searchText}
          onChange={handleSearchInput}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
          placeholder="Search for blog posts..."
          autoComplete="off"
        />

        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
            {suggestions
              .filter((suggestion) =>
                suggestion.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm border-b last:border-none"
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex justify-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-6 py-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Categories</option>
          <option value="tech">Tech</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="travel">Travel</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
