const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;

  return fetch(url)
    .then((response) => response.json())
    .then((info) => info)
    .catch((error) => error);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
