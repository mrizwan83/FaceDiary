import { RECEIVE_ALL_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from "../actions/friend_actions";

const friendsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_FRIENDS:
            return Object.assign({}, action.friends.friends);
        case RECEIVE_FRIEND:
            nextState[action.friend.friend.id] = action.friend.friend
            return nextState;
        case REMOVE_FRIEND:
            delete nextState[action.friendId]
            return nextState;
        default:
            return state;
    }
};

export default friendsReducer;