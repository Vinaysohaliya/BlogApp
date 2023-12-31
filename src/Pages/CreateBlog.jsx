import { useDispatch } from 'react-redux';
import { addPost, fetchPosts,  } from '../redux/blogSlice.js'; 
import { useEffect, useState } from 'react';

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
        dispatch(fetchPosts());
      })
      .catch((error) => {
        console.error('Error adding blog post:', error);
      });
  };

  // useEffect(() => {
  //   const dispatch = useDispatch();
  //   // dispatch(fetchUserData);
  //   console.log(user);
  
    
  // }, [])
  

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
