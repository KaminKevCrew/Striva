export const receiveRoute = (route) => (
  $.ajax({
    url: `api/routes/${route.id}`,
    method: 'get',
  })
);

export const fetchAllRoutes = (data) => (
  $.ajax({
    method: 'get',
    url: 'api/routes',
    data
  })
)

export const fetchRoute = (id) => {
  $.ajax({
    method: 'get',
    url: `api/workouts/${id}`,
  })
}

export const createRoute = (route) => (
  $.ajax({
    url: `api/routes`,
    method: 'post',
    data: { route },
  })
)