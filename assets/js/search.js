const searchToggle = document.querySelector('.js-wbsk-sidebar-search__open');

searchToggle?.addEventListener('click', () => {
    document.body.classList.toggle('search-open');
});
