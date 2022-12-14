import { RECEIVE_ALL_USERS, RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return Object.assign({}, action.usersPayload)
    case RECEIVE_CURRENT_USER:
      nextState[action.currentUser.id] = action.currentUser
      return nextState;
    case RECEIVE_USER:
      nextState[action.user.id] = action.user
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;

// anything you return its going to update the entities users slice of state