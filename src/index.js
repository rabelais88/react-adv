import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import reducers from 'reducers';

// const store = createStore(reducers, applyMiddleware(thunk));

// ReactDOM.render(<Provider store={store} ><App /> </Provider>, document.getElementById('root'));

import CommentProvider from 'reducers/CommentProvider'; 
ReactDOM.render(<CommentProvider><App /> </CommentProvider>, document.getElementById('root'));
