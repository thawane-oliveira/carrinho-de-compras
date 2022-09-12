const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const { expect } = require('@jest/globals');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {

  it('Teste se localStorage.getItem é chamado ao executar a função', async () => {
    getSavedCartItems('giorno');
    expect(localStorage.getItem).toBeCalled();
  }); 
  
  it('Teste se localStorage.getItem com parâmetro cartItems é chamado ao executar a função', async () => {
    getSavedCartItems('narancia');
    expect(localStorage.getItem).toBeCalledWith('cartItems', 'narancia');
  }); 

  // fail('Teste vazio');
});
