import React from "react";

const BlogCard = ({ post }) => {
  return (

    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-24 h-24 border-2 border-gray-300 rounded-md mb-4 mx-auto"
      />
      <h2 className="font-bold text-xl text-center mb-2">{post.title}</h2>
      <p className="text-sm text-gray-600 text-center">
        Category: {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
      </p>
    </div>

    
  );
};

export default BlogCard;
