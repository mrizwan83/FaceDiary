export const fetchLikes = () => (
    $.ajax({
        url: '/api/likes/',
        method: `GET`
    })
);


export const createLike = like => (
    $.ajax({
        url: `api/likes`,
        method: 'POST',
        data: like,
        contentType: false,
        processData: false     
    })
);


export const deleteLike = (likeId) => (
     $.ajax({
        url: `/api/likes/${likeId}`,
        method: `DELETE`
    })
);