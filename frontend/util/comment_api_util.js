export const fetchComments = () => (
    $.ajax({
        url: '/api/comments/',
        method: `GET`
    })
);

export const fetchComment = commentId => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: `GET`
    })
);

export const createComment = comment => (
    $.ajax({
        url: `api/comments`,
        method: 'POST',
        data: comment,
        contentType: false,
        processData: false     
    })
);

export const editComment = comment => (
     $.ajax({
        url: `api/comments/${comment.id}`,
        method: 'PATCH',
        data: comment,
        contentType: false,
        processData: false
    })
);

export const deleteComment = (commentId) => (
     $.ajax({
        url: `/api/comments/${commentId}`,
        method: `DELETE`
    })
);