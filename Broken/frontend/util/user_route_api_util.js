export const fetchAllRoutes = (userId) => (
  $.ajax({
    url: `api/users/${userId}/routes`,
    method: 'get',
  })
);

export const createRoute = (userId, route) => (
  $.ajax({
    url: `api/users/${userId}/routes`,
    method: 'post',
    data: {route},
  })
)

export const deleteRoute = (userId, routeId) => (
  $.ajax({
    url: `api/users/${userId}/routes/${routeId}`,
    method: 'delete',
  })
)