export const fetchPosts = () => (
    $.ajax({
        url: '/api/posts/',
        method: `GET`
    })
);

export const fetchPost = postId => (
    $.ajax({
        url: `/api/posts/${postId}`,
        method: `GET`
    })
);

export const createPost = formData => (
    $.ajax({
        url: `api/posts`,
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false     
    })
);

export const editPost = post => (
     $.ajax({
        url: `api/posts/${post.id}`,
        method: 'PATCH',
        data: post,
        contentType: false,
        processData: false
    })
);

export const deletePost = (postId) => (
     $.ajax({
        url: `/api/posts/${postId}`,
        method: `DELETE`
    })
);