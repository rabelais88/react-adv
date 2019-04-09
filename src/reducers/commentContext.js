import React, { createContext, useReducer } from 'react';
import commentsReducer from './comments';
// https://medium.com/crowdbotics/how-to-use-usereducer-in-react-hooks-for-performance-optimization-ecafca9e7bf5

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const contextValue = useReducer(commentsReducer, []);
  return (
    <CommentContext.Provider value={contextValue}>
      {children}
    </CommentContext.Provider>
  );
}

export default CommentProvider;