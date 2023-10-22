import React from 'react';

const BlogCard = ({ title, text }) => {
  // Split the text into words


  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-60 h-60 m-2 cursor-pointer">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 ">Read Full Artical</p>
    </div>
  );
};

export default BlogCard;
