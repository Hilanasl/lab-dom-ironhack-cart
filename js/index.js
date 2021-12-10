// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const subtotalPrice = price.innerHTML * quantity.value;

  subtotal.innerHTML = subtotalPrice
  return subtotalPrice
}


// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
// end of test

// ITERATION 2
function calculateAll() {
  let finalPrice = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product, i) => {
    finalPrice += updateSubtotal(product);
  })



  // ITERATION 3
  const totalPrice = document.querySelectorAll('#total-value span');
  totalPrice.innerHTML = finalPrice;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const removeBtn = document.querySelectorAll('button .btn-remove');
  removeBtn.forEach((button, i) => {
    removeBtn.addEventListener('click', removeProduct);
    ...
  })
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
