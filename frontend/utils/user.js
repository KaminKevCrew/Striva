export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users'
  })
}

export const fetchUser = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET',
  });
};