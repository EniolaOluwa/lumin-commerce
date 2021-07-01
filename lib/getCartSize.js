const getCartSize = (cart) => {
  const cartItems = cart.reduce((cart, item) => {
    return cart + item.quantity;
  }, 0);
  return cartItems;
};

export default getCartSize;
