import React, { Fragment } from 'react';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import { CommentContext } from 'reducers/CommentProvider';

export default () => {
  return (<CommentContext.Consumer>
    { value => (
      <Fragment>
        <CommentList {...value }/>
        <CommentBox {...value }/>
      </Fragment>
    )}
  </CommentContext.Consumer>);
}