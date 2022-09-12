require('../mocks/fetchSimulator');
const { expect } = require('chai');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', async () => {

  const response = await fetchProducts('computador');
  console.log(response);
  
  expect(fetchProducts).toBe('function');

  expect(fetch).toHaveBeenCalled(fetchProducts('computador'));

  expect(fetchProducts('computador').toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador'))

  expect(fetchProducts('computador')).lessThanOrEqual(computadorSearch);

  expect(fetchProducts()).toEqual(new Error('You must provide an url'));
  // fail('Teste vazio');
});
