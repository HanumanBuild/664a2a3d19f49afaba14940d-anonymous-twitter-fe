// Import necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

// Define the App component
function App() {
  const [posts, setPosts] = useState([]);

  // Function to fetch posts from the backend
  const fetchPosts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_ANONYMOUS_TWITTER_BE_URL}/posts`);
    setPosts(response.data);
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Render the component
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Anonymous Twitter</h1>
      <PostForm fetchPosts={fetchPosts} />
      <PostList posts={posts} />
    </div>
  );
}

// Export the App component
export default App;