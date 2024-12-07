import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import BlogCard from "./components/BlogCard";
import { fetchBlogs } from "./services/api";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("all");
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from the backend on component mount
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs(); // Fetch blogs from the API
        setBlogPosts(data); // Replace hardcoded blogs with API data
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false); // End the loading state
      }
    };

    loadBlogs();
  }, []); // Empty dependency array ensures this runs once

  // Filter blogs based on search and category
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (filter === "all" || post.category === filter)
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto p-8">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          filter={filter}
          setFilter={setFilter}
        />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;

