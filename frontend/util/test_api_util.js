export const fetchUser = () => (
  $.ajax({
    url: `api/users/${121}`,
    method: 'GET',
  })
);