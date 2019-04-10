import React, { createContext, useReducer } from 'react';
import commentsReducer from './comments';
// https://medium.com/crowdbotics/how-to-use-usereducer-in-react-hooks-for-performance-optimization-ecafca9e7bf5

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentsReducer, []);
  return (
    <CommentContext.Provider value={{state, dispatch}}>
      {children}
    </CommentContext.Provider>
  );
}


export { CommentContext };
export default CommentProvider;