export default {
  auth
}

async function auth (username, password) {
  const res = await window.fetch(window.location.href + 'auth/login', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  return res.status === 200
}
