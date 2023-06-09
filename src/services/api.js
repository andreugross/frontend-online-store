export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(endPoint);
  const categories = await request.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPointQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const requestQuery = await fetch(endPointQuery);
  const response = await requestQuery.json();
  return response;
}

export async function getProductsFromId(productId) {
  const endPointQuery = `https://api.mercadolibre.com/items/${productId}`;
  const requestQuery = await fetch(endPointQuery);
  const response = await requestQuery.json();
  return response;
}
