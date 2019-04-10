import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

const CommentBox = props => {
  const [comment, setComment] = useState('')

  const handleChange = e => setComment(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    props.saveComment(comment);
    setComment('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={handleChange} />
      <div>
        <p>{JSON.stringify(comment)}</p>
        <p>{JSON.stringify(props.comments)}</p>
        <button>submit comment</button>
      </div>
    </form>
  )
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(
  mapStateToProps,
  { saveComment: actions.saveComment }
)(CommentBox);