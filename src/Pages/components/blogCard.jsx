import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogCard = ({ title, text }) => {
  // Split the text into words

  const navigate = useNavigate();

  function handleclick() {
    navigate('/BlogPost',{state:[title,text]})
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-60 h-60 m-2 ">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <button onClick={handleclick} className="text-gray-600 ">Read Full Artical</button>
    </div>
  );
};

export default BlogCard;
