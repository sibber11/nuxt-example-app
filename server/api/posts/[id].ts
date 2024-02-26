import { postsArray } from "."

export default defineEventHandler((event) => {
  const id = parseInt(getRouterParam(event, 'id'));

  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }
  return postsArray[id];
})