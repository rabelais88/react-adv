import React, { useState, useReducer, useContext } from 'react';
// import { connect } from 'react-redux';
// import * as actions from 'actions';
import commentReducers from 'reducers/comments';
import { saveComment } from 'actions';

const CommentBox = props => {
  const [comment, setComment] = useState('')
  const [state, dispatch] = useReducer(commentReducers, []);

  const handleChange = e => setComment(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(saveComment(comment));
    setComment('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={handleChange} />
      <div>
        <p>{JSON.stringify(comment)}</p>
        <p>{JSON.stringify(state)}</p>
        <button>submit comment</button>
      </div>
    </form>
  )
}

export default CommentBox;