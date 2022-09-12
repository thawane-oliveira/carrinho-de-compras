require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
const { expect } = require('@jest/globals');

describe('2 - Teste a função fetchItem', () => {

  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  }); 

  it('Teste se a fetch é chamada com a função tendo MLB1615760527 como parâmetro', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  }); 

  it('Teste se o endpoint https://api.mercadolibre.com/items/MLB1615760527 é utilizado ao executar a função com MLB1615760527 como parâmetro', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Teste se o retorno da função com parâmetro MLB1615760527 tem estrutura de dados igual ao objeto item', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });

  it('Teste se a função sem parâmetro retorna You must provide an url', async () => {
    const empty = await fetchItem();
    
    expect(empty).toEqual(new Error('You must provide an url'));
  });  // fail('Teste vazio');
});
