import * as LikeApiUtil from '../util/like_api_util'

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveAllLikes = likes => {
    return({
        type: RECEIVE_ALL_LIKES,
        likes
    })
};

const receiveLike = like => {
    return({
        type: RECEIVE_LIKE,
        like
    })
};

const removeLike = likeId => {
    return({
        type: REMOVE_LIKE,
        likeId
    })
};

export const fetchLikes = () => dispatch => (
    LikeApiUtil.fetchLikes()
    .then(likes => dispatch(receiveAllLikes(likes)))
);


export const createLike = (like) => dispatch => (
    LikeApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
);



export const deleteLike = (likeId) => dispatch => (
    LikeApiUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
);