const fetchProducts = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

  const products = await fetch(url)
  .then((response) => response.json())
  .then((info) => info.results)
  .catch((error) => console.log({ error }));

  return products;
};

console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
