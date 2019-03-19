import { ADD_COMMENT } from '../constants';

export const addComment = newComment => ({
  type: ADD_COMMENT,
  payload: newComment
});