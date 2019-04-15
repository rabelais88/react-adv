import { SAVE_COMMENT, UPDATE_COMMENTS } from './types';
import axios from 'axios';

export const saveComment = newComment => ({
  type: SAVE_COMMENT,
  payload: newComment
});

export const updateComments = comments => ({
  type: UPDATE_COMMENTS,
  payload: comments,
});

export const fetchComments = () => {
  return (dispatch, getState) => {
    axios.get('http://jsonplaceholder.typicode.com/comments').then(({ data }) => {
      dispatch(updateComments(data.slice(1,10)))
    }).catch(err => console.error('failed to fetch from network'));
  }
};

export const fetchCommentsPromise = url => ({

});