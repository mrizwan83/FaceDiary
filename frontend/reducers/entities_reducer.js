import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import friendsReducer from './friends_reducer';
import likesReducer from './likes_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  friends: friendsReducer,
  likes: likesReducer,
  comments: commentsReducer
});

export default entitiesReducer;

// this is to make slices of states 