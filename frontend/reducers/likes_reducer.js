import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const likesReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_LIKES:
            return Object.assign({}, action.likes.likes);
        case RECEIVE_LIKE:
            nextState[action.like.like.id] = action.like.like
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likeId]
            return nextState;
        default:
            return state;
    }
};

export default likesReducer;