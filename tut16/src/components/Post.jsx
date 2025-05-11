import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const maxChars = 30;

  return (
    <article>
      <Link to={`/post/${post.id}`}>
         <h2>{post.title}</h2>
         <p className='postDate'>{post.datetime}</p>
         <p className='postBody'>{
            (post.body).length <= maxChars
               ? post.body
               : `${(post.body.slice(0, maxChars))}...`
         }</p>
      </Link>
    </article>
  );
};

export default Post;