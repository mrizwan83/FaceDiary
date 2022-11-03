import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return Object.assign({}, action.comments);
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId]
            return nextState;
        default:
            return state;
    }
};

export default commentsReducer;


// WE CAN USE ONE ACTION IN TWO DIFFERENT REDUCERS FOR EXAMPLE:
// RECEIVE_ALL_USERS --> USERS REDUCER HANDLE THE USERS SLICE
// FOR THE COMMENTS REDUCER ---> KEY INTO THE COMMENTS SECTION FROM THE PAYLOAD AND HANDLE IT FOR THE COMMENTS SLICE OF STATE