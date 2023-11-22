const navMobile = (navMobileBtnSelector, navMobileBlockSelector, navMobileLinkSelector) => {
    
    const navMobileBtn = document.querySelector(navMobileBtnSelector);
    const navMobileBlock = document.querySelector(navMobileBlockSelector);
    const navMobileLinks = document.querySelectorAll(navMobileLinkSelector);

    const isDownFlipped = navMobileBlock.classList.contains('a-flip-down');

    const toggleTextBtn = () => {
        navMobileBtn.textContent = isDownFlipped ? 'menu' : 'close';
    }

    const toggleNav = () =>  {
        navMobileBlock.classList.toggle('a-flip-down');
        document.body.classList.toggle('no-scroll');
        toggleTextBtn();
    }

    navMobileBtn.addEventListener('click', () => {
        toggleNav();
    });

    navMobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMobileBlock.classList.remove('a-flip-down');
            document.body.classList.remove('no-scroll');
            toggleTextBtn();
        });
    });
};

export default navMobile;