export default {
  auth
}

async function auth (username, password) {
  const url = window.location.href + 'auth/login'

  const res = await window.fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  return res.status === 200
}
