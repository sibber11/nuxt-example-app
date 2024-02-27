export default defineEventHandler(async (event):Promise<{message:string,token?:string}> => {
  
  const body = await readBody(event)
  if (body.username && body.password) {
    return {
      message: 'login success',
      token: Math.random().toString(16).substring(2,16)
    }
  }else{
    return {
      message: 'login failed'
    }
  }
})
