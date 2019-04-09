import { SAVE_COMMENT } from 'actions/types';

const _commentDefault = [];
const commentReducer = (state = _commentDefault, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}

export default commentReducer;