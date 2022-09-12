const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const { expect } = require('@jest/globals');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se com cartItem como parâmetro, o localStorage.setItem é chamado', () => {
    saveCartItems('jotaro');
    expect(localStorage.setItem).toBeCalled();
  }); 

  it('Teste se com cartItem como parâmetro, o localStorage.setItem é chamado com os parâmetros: o primeiro a chave cartItems e o segundo o argumento passado na função saveCartItems', () => {
    saveCartItems('kakyoin');
    expect(localStorage.setItem).toBeCalledWith('cartItems', 'kakyoin');
  });
  // fail('Teste vazio');
});
