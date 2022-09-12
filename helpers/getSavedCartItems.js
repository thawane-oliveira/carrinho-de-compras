const getSavedCartItems = (savedItems) => {
  localStorage.getItem('cartItems', savedItems);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
