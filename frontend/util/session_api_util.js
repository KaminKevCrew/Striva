export const login = user => {
  $.ajax({
    method: 'post',
    url: "/api/session",
    data: { user },
  })
}

export const logout = () => {
  $.ajax({
    method: 'delete',
    url: "/api/session",
  })
}

export const signup = user => {
  $.ajax({
    method: 'get',
    url: "/api/session",
    data: { user },
  })
}