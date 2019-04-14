import React from "react";
import { connect } from "react-redux";

const renderComments = comments => {
  return comments.map((comment, idx) => <li key={idx}>{comment}</li>);
};

const CommentList = props => {
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
  {}
)(CommentList);
