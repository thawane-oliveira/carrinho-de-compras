// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

const cart = document.querySelector('.cart__items');
const loading = document.querySelector('.loading');

const totalValue = () => {
  const cartLiItems = document.querySelectorAll('.cart__item');
  const prices = [];
  cartLiItems.forEach((li) => {
    const price = li.innerText.split('PRICE: $');
    prices.push(Number(price[1]));
  });
  const total = document.querySelector('.total-price');
  const result = Math.round(prices.reduce((acc, curr) => acc + curr, 0) * 100) / 100;
  total.innerText = result;
};

const cartItemClickListener = (e) => {
  e.target.remove();
  saveCartItems(cart.innerHTML);
  totalValue();
};

const clearAll = () => {
  const clbutton = document.querySelector('.empty-cart');
  clbutton.addEventListener('click', () => {
    cart.innerHTML = '';
    saveCartItems('');
    totalValue();
  });
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const show = () => {
  loading.innerText = 'carregando...';
};

// const hide = () => {
//   const list = document.querySelector('items');
//   const prepare = document.querySelector('.loading');
//   list.removeChild(prepare);
// };

const showCartItem = async (e) => {
  // mostra no carrinho
  const pid = e.target.parentElement.firstChild.innerText;
  const resultFetchItem = await fetchItem(pid).then((res) => createCartItemElement(res));
  cart.appendChild(resultFetchItem);

  // salva no localStorage
  saveCartItems(cart.innerHTML);
  totalValue();
};

const addLogicToCartButton = () => {
  const addButtons = document.querySelectorAll('.item__add');

  addButtons.forEach((button) => {
    button.addEventListener('click', showCartItem);
  });
  // totalValue();
};

const pcList = async () => {
  const sectionsClass = document.querySelector('.items');
  const recall = await fetchProducts('computador');

  recall.results
    .forEach((pc) => {
      const item = createProductItemElement(pc);
      sectionsClass.appendChild(item);
    });
    loading.remove();
    addLogicToCartButton();
};

const load = () => {
  cart.innerHTML = getSavedCartItems('cartItems');
  const cartLiItems = document.querySelectorAll('.cart__item');
  cartLiItems.forEach((li) => {
    li.addEventListener('click', cartItemClickListener);
  });
};

window.onload = async () => {
  show();
  pcList();
  clearAll();
  load();
  totalValue();
};
