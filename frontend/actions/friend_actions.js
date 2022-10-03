import * as FriendApiUtil from "../util/friend_api_util";

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveAllFriends = friends => {
    return({
        type: RECEIVE_ALL_FRIENDS,
        friends
    })
};

const receiveFriend = friend => {
    return({
        type: RECEIVE_FRIEND,
        friend
    })
};

const removeFriend = friendId => {
    return({
        type: REMOVE_FRIEND,
        friendId
    })
};

export const fetchFriends = () => dispatch => (
    FriendApiUtil.fetchFriends()
    .then(friends => dispatch(receiveAllFriends(friends)))
);


export const createFriend = (friend) => dispatch => (
    FriendApiUtil.createFriend(friend)
        .then(friend => dispatch(receiveFriend(friend)))
);

export const editFriend = friend => dispatch => (
    FriendApiUtil.editFriend(friend)
        .then(friend => dispatch(receiveFriend(friend)))
);

export const deleteFriend = (friendId) => dispatch => (
    FriendApiUtil.deleteFriend(friendId)
        .then(() => dispatch(removeFriend(friendId)))
);