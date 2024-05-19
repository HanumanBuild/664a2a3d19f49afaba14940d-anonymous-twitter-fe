import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ fetchPosts }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim()) {
      await axios.post(`${process.env.REACT_APP_ANONYMOUS_TWITTER_BE_URL}/posts`, { content });
      setContent('');
      fetchPosts();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="w-full p-2 border rounded-md"
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="3"
      ></textarea>
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        Post
      </button>
    </form>
  );
};

export default PostForm;