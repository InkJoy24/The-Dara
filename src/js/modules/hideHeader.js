const hideHeader = (headerSelector) => {
    const header = document.querySelector(headerSelector);

    const toggleHeaderVisibility = () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (isAtBottom) {
          header.classList.add('header-hide');
        } else {
          header.classList.remove('header-hide');
        };
    };

    window.addEventListener("scroll", toggleHeaderVisibility);
};

export default hideHeader;
