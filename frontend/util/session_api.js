// export const postUser = user => {
//     return $.ajax({
//       url: `/api/users`,
//       method: 'POST',
//       data: { user }
//     })
// };
  
//   export const postSession = user => {
//     return $.ajax({
//       url: `/api/session`,
//       method: 'POST',
//       data: { user }
//     })
//   };
  
//   export const deleteSession = () => {
//     return $.ajax({
//       url: `/api/session`,
//       method: 'DELETE'
//     })
//   };

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
