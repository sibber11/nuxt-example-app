import { type Product, products } from "."

export default defineEventHandler((event): Product | void => {
  const id = getRouterParam(event, 'id');
  if (!id) {
    return;
  }

  return products.find(e => e.id == parseInt(id));
})