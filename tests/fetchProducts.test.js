require('../mocks/fetchSimulator');
// const { expect } = require('chai');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const { expect } = require('@jest/globals');

describe('1 - Teste a função fetchProducts', () => {

  // const response = fetchProducts('computador');
  // console.log(response);

  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  }); 

  it('Teste se a fetch é chamada com a função tendo computador como parâmetro', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  }); 

  it('Teste se o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador é utilizado ao executar a função com computador como parâmetro', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Teste se o retorno da função com parâmetro computador tem estrutura de dados igual ao objeto computadorSearch', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });

  it('Teste se a função sem parâmetro retorna You must provide an url', async () => {
    const empty = await fetchProducts();
    
    expect(empty).toEqual(new Error('You must provide an url'));
  });
  // fail('Teste vazio');
});
