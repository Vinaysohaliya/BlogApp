import { useDispatch } from 'react-redux';
import { addPost } from '../redux/blogSlice.js'; // Import your Redux slice
import { useState } from 'react';

function CreateBlog() {
  const dispatch = useDispatch();

  const [blogData, setBlogData] = useState({
    title: '',
    text: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addPost(blogData))
      .then(() => {
        console.log('Blog post added successfully');
      })
      .catch((error) => {
        console.error('Error adding blog post:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          placeholder='Title'
          name='title'
          value={blogData.title}
          onChange={onChange}
        />
        <label htmlFor='text'>Text</label>
        <input
          placeholder='Text'
          name='text'
          value={blogData.text}
          onChange={onChange}
        />
        <button type='submit'>Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
