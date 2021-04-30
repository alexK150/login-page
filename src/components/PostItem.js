import React from 'react';

function PostItem({post}) {
  return (
    <div className={'card'}>
      <h3 >{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default PostItem;