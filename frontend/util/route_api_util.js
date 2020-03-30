export const receiveRoute = (route) => (
  $.ajax({
    url: `api/routes/${route.id}`,
    method: 'GET',
  })
);

export const fetchAllRoutes = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/routes',
    data
  })
)

export const fetchRoute = (id) => {
  $.ajax({
    method: 'GET',
    url: `api/workouts/${id}`,
  })
}

export const createRoute = (route) => (
  $.ajax({
    url: `api/routes`,
    method: 'POST',
    data: { route },
  })
)