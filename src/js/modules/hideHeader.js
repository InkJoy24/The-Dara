const hideHeader = (headerSelector) => {
    const header = document.querySelector(headerSelector);

    const toggleHeaderVisibility = () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (isAtBottom) {
          header.classList.add('none');
        } else {
          header.classList.remove('none');
        };
    };

    window.addEventListener("scroll", toggleHeaderVisibility);
};

export default hideHeader;
