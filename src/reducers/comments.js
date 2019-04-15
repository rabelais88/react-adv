import { SAVE_COMMENT, UPDATE_COMMENTS } from 'actions/types';

const _commentDefault = [];
const commentReducer = (state = _commentDefault, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [ ...state, action.payload ];
    case UPDATE_COMMENTS:
      return action.payload;
    default:
      return state;
  }
}

export default commentReducer;