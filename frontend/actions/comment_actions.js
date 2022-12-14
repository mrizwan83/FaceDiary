import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveAllComments = comments => {
    return({
        type: RECEIVE_ALL_COMMENTS,
        comments
    })
};

const receiveComment = comment => {
    return({
        type: RECEIVE_COMMENT,
        comment
    })
};

const removeComment = commentId => {
    return({
        type: REMOVE_COMMENT,
        commentId
    })
};

export const fetchComments = () => dispatch => (
    CommentAPIUtil.fetchComments()
    .then(comments => dispatch(receiveAllComments(comments)))
);

export const fetchComment = (commentId) => dispatch => (
    CommentAPIUtil.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
);

export const createComment = (comment) => dispatch => (
    CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
);

export const editComment = comment => dispatch => (
    CommentAPIUtil.editComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId) => dispatch => (
    CommentAPIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
);