import { ADD_COMMENT } from '../constants';
import { combineReducers } from 'redux';

const _commentDefault = [];
const commentReducer = (state = _commentDefault, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}

export default combineReducers({
  comments: commentReducer
});