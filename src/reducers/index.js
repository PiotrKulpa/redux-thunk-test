import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

// register reducers
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
