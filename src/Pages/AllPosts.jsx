import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/blogSlice';
import BlogCard from './components/blogCard';

const AllPosts = () => {
  const posts = useSelector((state) => state.blog.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <ul className="flex flex-wrap">
        {posts.map((post) => (
          <li key={post.id} className="w-1/4 p-2">
            <BlogCard title={post.title} text={post.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPosts;
