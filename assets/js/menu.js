const menuToggle = document.querySelector('.js-global-sidebar-nav__toggle');
const panelCloses = document.querySelectorAll('.mh-panel__close');

menuToggle?.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

panelCloses.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.classList.remove('menu-open', 'search-open');
    });
});
