export const fetchUser = (userId) => (
  $.ajax ({
    url: `api/users/${userId}`,
    method: 'get',
  })
);

export const fetchAllUsers = () => (
  $.ajax ({
    url: `api/users`,
    method: 'get',
  })
);

export const fetchAllFollows = () => (
  $.ajax ({
    url: `api/follows`,
    method: 'get',
  })
);