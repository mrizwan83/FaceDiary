export const fetchFriends = () => (
    $.ajax({
        url: '/api/friends/',
        method: `GET`
    })
);


export const createFriend = friend => (
    $.ajax({
        url: `api/friends`,
        method: 'POST',
        data: friend,
        contentType: false,
        processData: false     
    })
);

export const editFriend = friend => (
     $.ajax({
        url: `api/friends/${friend.id}`,
        method: 'PATCH',
        data: friend,
        contentType: false,
        processData: false
    })
);

export const deleteFriend = (friendId) => (
     $.ajax({
        url: `/api/friends/${friendId}`,
        method: `DELETE`
    })
);