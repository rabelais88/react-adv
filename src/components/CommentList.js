import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from 'actions';

const renderComments = comments => {
  return comments.map((comment, idx) => <li key={idx}>{JSON.stringify(comment)}</li>);
};

const CommentList = props => {
  useEffect(() => {
    console.log('component loaded');
    props.fetchComments();
  }, []);
  return (
    <div>
      <ul>{renderComments(props.comments)}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentList);
