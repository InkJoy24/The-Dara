import smoothscrollPolyfill from 'smoothscroll-polyfill';

smoothscrollPolyfill.polyfill();

const navigation = () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);

      if (scrollTarget) {
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

export default navigation;

