// const fetchProducts = async (merch) => {

const fetchProducts = async (goods) => {
  // if (!goods) {
  //   throw new Error('You must provide an url');
  // }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${goods}`;
  // const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

  const products = await fetch(url)
  .then((response) => response.json())
  .then((info) => info)
  .catch((error) => error);

  return products;
};

// recebi ajuda do Tiago Quadros na mentoria

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
