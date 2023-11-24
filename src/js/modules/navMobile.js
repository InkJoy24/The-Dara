const navMobile = (navMobileBtnSelector, navMobileBlockSelector, navMobileLinkSelector) => {
    
    const navMobileBtn = document.querySelector(navMobileBtnSelector);
    const navMobileBlock = document.querySelector(navMobileBlockSelector);
    const navMobileLinks = document.querySelectorAll(navMobileLinkSelector);

    
    const toggleNav = () =>  {
        navMobileBlock.classList.toggle('nav__mobile--open');
        // document.body.classList.toggle('no-scroll');
        const isNavOpened = navMobileBlock.classList.contains('nav__mobile--open');
        navMobileBtn.textContent = (isNavOpened ? 'close' : 'menu');
        isNavOpened ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
    }

    navMobileBtn.addEventListener('click', () => {
        toggleNav();
    });

    navMobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMobileBlock.classList.remove('nav__mobile--open');
            document.body.classList.remove('no-scroll');
            navMobileBtn.textContent = "menu";
        });
    });
};

export default navMobile;