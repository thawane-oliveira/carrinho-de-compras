// const fetchProducts = async (merch) => {

const fetchProducts = async (goods) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${goods}`;

  return fetch(url)
    .then((response) => response.json())
    .then((info) => info)
    .catch((error) => error);
};

// recebi ajuda do Tiago Quadros na mentoria

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
