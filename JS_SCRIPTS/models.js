const scrollDownBTN = document.querySelector('.scroll-down');

scrollDownBTN.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
})