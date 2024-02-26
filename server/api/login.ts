export default defineEventHandler(async (event) => {
  if (event.method == 'POST') {
    return {
      message: 'login success',
      token: 'sometoken'
    }
  }
})
