import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
  id: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id }
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
}

export default sessionReducer

// WHAT IS ACTION? JS OBJECT WITH TYPE AND PAYLOAD
// WE FREEZE OLDSTATE TO MAKE SHALLOW DUPLICATE TO LOCK DOWN CURRENT STATE AND 
// ONLY RETURN NEW STATE WITHOUT MODIFYING OLD STATE
// THE ONLY WAY WE CAN MODIFY THE REDUX STORE IF WE RETURN FROM REDUCER
// SWITCH LOOKS FOR MATCH IN ACTION.TYPE AND DOES WHAT IT NEEDS TO DO OTHERWISE
// RETURNS THE OLD STATE