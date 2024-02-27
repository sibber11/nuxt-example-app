import { postsArray } from "."

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  if (id) {
    let intId = parseInt(id);
    return postsArray.find(post=>post.id == intId);
  }
})