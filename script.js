const toggleButton = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar ul');

toggleButton.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});


let cart = [];

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });

  updateCartModal();
}

function updateCartModal() {

  const cartModal = document.getElementById('cart-modal');
  cartModal.style.display = 'flex';


  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = '';

  let total = 0;


  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
    total += item.price;
  });


  document.getElementById('cart-total').textContent = total.toFixed(2);
}

function closeModal() {

  const cartModal = document.getElementById('cart-modal');
  cartModal.style.display = 'none';
}


document.getElementById('checkout-btn')?.addEventListener('click', function () {
  alert('Proceeding to checkout');
  closeModal();
});
document.querySelectorAll('.recipe-button').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const recipeName = button.parentElement.querySelector('.recipe-title').textContent;
    alert(`You clicked on the ${recipeName} recipe!`);
  });
});


const dealCards = document.querySelectorAll('.deal-card');

if (dealCards.length > 0) {
  const dealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  dealCards.forEach((card) => dealObserver.observe(card));
}