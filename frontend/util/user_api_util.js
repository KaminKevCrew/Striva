export const fetchUser = (userId) => (
  $.ajax ({
    url: `api/users/${userId}`,
    method: 'GET',
  })
);

export const fetchAllUsers = () => (
  $.ajax ({
    url: `api/users`,
    method: 'GET',
  })
);

export const fetchAllFollows = () => (
  $.ajax ({
    url: `api/follows`,
    method: 'GET',
  })
);