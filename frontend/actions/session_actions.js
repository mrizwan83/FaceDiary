import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})


// this is our regular action creator
// an action is a JS obect that has Key-value pairs with type and some type of payload
const receiveAllUsers = usersPayload => ({
  type: RECEIVE_ALL_USERS,
  usersPayload
})

export const signup = formUser => {
  return (dispatch) => {
    return SessionAPIUtil.signup(formUser)
      .then(user => { dispatch(receiveCurrentUser(user)) })
      .fail(error => { dispatch(receiveErrors(error.responseJSON)) })
  }
}

export const login = formUser => {
  return (dispatch) => {
    return SessionAPIUtil.login(formUser)
      .then(user => { dispatch(receiveCurrentUser(user)) })
      .fail(error => { dispatch(receiveErrors(error.responseJSON)) })
  }
}

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.logout()
      .then(() => { dispatch(logoutCurrentUser()) })
  }
}

export const fetchUser = (userId) => {
  return (dispatch) => {
    return UserAPIUtil.fetchUser(userId)
      .then((user) => { dispatch(receiveUser(user)) })
  }
}
// thunk action creator
// This is asycnhronous 
// ,then --> callback --> invoke dispatch --> invoke receiveAllUsers with allUsers
// allUsers represent the Json Jbuilder Response


// what does it mean when we dispatch an action????
// dispatch is a redux function 
// VERY IMPORTANT
// when you dispatch an action it send your action through your reducers!!!!!!!!!!!
// when you dispatch an action it hits every reducer
// EVERY ACTION HITS EVERY REDUCER
// THE KEY IS THE TYPE




export const fetchAllUsers = () => {
  return (dispatch) => {
    return UserAPIUtil.fetchAllUsers()
      .then((allUsers) => { dispatch(receiveAllUsers(allUsers)) })
  }
}

export const updateUser = (user) => {
  return (dispatch) => {
    return UserAPIUtil.updateUser(user)
      .then((newUser) => { dispatch(receiveUser(newUser)) })
  }
}

export const updateUserInfo = (user) => {
  return (dispatch) => {
    return UserAPIUtil.updateUserInfo(user)
      .then((newUser) => dispatch(receiveUser(newUser)))
  }
}