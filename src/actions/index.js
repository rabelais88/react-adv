import { SAVE_COMMENT } from './types';

export const saveComment = newComment => ({
  type: SAVE_COMMENT,
  payload: newComment
});