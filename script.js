// Fade in
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Smooth link transition
const links = document.querySelectorAll('a, button');
links.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if(href && href.endsWith('.html')){
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });
  
