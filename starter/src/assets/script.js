/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

const products = [];

const product1 = {
  name: 'Cherry',
  price: 2.99,
  quantity: 0,
  productId: 1,
  image: '/images/cherry.jpg',
};

const product2 = {
  name: 'Orange',
  price: 1.99,
  quantity: 0,
  productId: 2,
  image: '/images/orange.jpg',
};

const product3 = {
  name: 'Strawberry',
  price: 3.99,
  quantity: 0,
  productId: 3,
  image: '/images/strawberry.jpg',
};

products.push(product1, product2, product3);

const cart = [];

function addProductToCart(productId) {
  const product = products.find((product) => product.productId === productId);
  product.quantity += 1;
  const cartProduct = cart.find((cartProduct) => cartProduct.productId === productId);
  if (!cartProduct) {
    cart.push(product);
  }
}

function increaseQuantity(productId) {
  const product = products.find((product) => product.productId === productId);
  product.quantity += 1;
}

function decreaseQuantity(productId) {
  const product = products.find((product) => product.productId === productId);
  product.quantity -= 1;
  if (product.quantity === 0) {
    removeProductFromCart(productId);
  }
}

function removeProductFromCart(productId) {
  const product = products.find((product) => product.productId === productId);
  product.quantity = 0;
  const index = cart.findIndex((cartProduct) => cartProduct.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}
let totalPaid = 0;
function cartTotal() {
  totalPaid = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  return totalPaid;
}

function emptyCart() {
  cart = [];
  totalPaid = 0;
}

function pay(amount) {
  const total = cartTotal();
  if (amount < total) {
    return -(total - amount);
  } else {
    return amount - total;
  }
}


module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
};
