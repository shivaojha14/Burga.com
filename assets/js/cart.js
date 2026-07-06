const cartToggle = document.querySelector('.js-wbsk-sidebar-cart__open');

cartToggle?.addEventListener('click', () => {
    document.body.classList.toggle('cart-open');
});
