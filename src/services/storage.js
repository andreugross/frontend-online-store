export const saveProducts = (products) => {
  localStorage.setItem('cartProducts', JSON.stringify(products));
};

export const getProducts = () => JSON.parse(localStorage.getItem('cartProducts'));
