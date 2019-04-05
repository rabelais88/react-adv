import React, { useState } from 'react';

const CommentBox = props => {
  const [comment, setComment] = useState('')

  const handleChange = e => setComment(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    setComment('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={handleChange} />
      <div>
        <p>{JSON.stringify(comment)}</p>
        <button>submit comment</button>
      </div>
    </form>
  )
}

export default CommentBox;