import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receiveAllPosts = posts => {
    return({
        type: RECEIVE_ALL_POSTS,
        posts
    })
};

const receivePost = post => {
    return({
        type: RECEIVE_POST,
        post
    })
};

const removePost = postId => {
    return({
        type: REMOVE_POST,
        postId
    })
};

export const fetchPosts = () => dispatch => (
    APIUtil.fetchPosts().then((posts) => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = (postId) => dispatch => {
    return PostAPIUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
};

export const createPost = (post) => dispatch => {
    return (PostAPIUtil.createPost(post))
        .then(newPost => dispatch(receivePost(newPost)))
};

export const editPost = post => dispatch => {
    return APIUtil.editPost(post.id)
        .then(newPost => dispatch(receivePost(newPost)));
};

export const deletePost = (postId) => dispatch => {
    return PostAPIUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)))
};