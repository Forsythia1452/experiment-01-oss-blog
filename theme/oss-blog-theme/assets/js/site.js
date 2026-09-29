(() => {
    const menuButton = document.querySelector('.menu-button');
    const navigation = document.querySelector('#site-navigation');

    if (!menuButton || !navigation) return;

    const closeMenu = () => {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
    };

    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        navigation.classList.toggle('is-open', !isOpen);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
            menuButton.focus();
        }
    });

    window.matchMedia('(min-width: 841px)').addEventListener('change', (event) => {
        if (event.matches) closeMenu();
    });
})();

