import React from 'react';
import { useLocation } from 'react-router-dom';

function BlogPost() {
  const location = useLocation();

  const receivedData = location.state;
  console.log(receivedData);

  return (
    <div>
      <h2>Received Data:</h2>
      <pre>{receivedData[0]}</pre>
      <pre>{receivedData[1  ]}</pre>
    </div>
  );
}

export default BlogPost;
