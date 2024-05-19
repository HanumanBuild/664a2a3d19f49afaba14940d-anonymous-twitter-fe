import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="p-4 mb-4 border rounded-md">
          <p>{post.content}</p>
          <span className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default PostList;
