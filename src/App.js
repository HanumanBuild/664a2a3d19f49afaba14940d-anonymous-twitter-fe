import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_ANONYMOUS_TWITTER_BE_URL}/posts`);
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Anonymous Twitter</h1>
      <PostForm fetchPosts={fetchPosts} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;