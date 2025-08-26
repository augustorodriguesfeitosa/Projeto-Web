window.addEventListener('scroll', function() {
  const menu = document.querySelector('.menu-flutuante');
  if(window.scrollY > 50) {
    menu.style.background = 'rgba(20,20,30,0.98)';
    menu.style.boxShadow = '0 2px 16px #ff00cc55';
  } else {
    menu.style.background = 'rgba(20,20,30,0.95)';
    menu.style.boxShadow = '0 2px 8px #000a';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const destaque = document.querySelector('.destaque');
  if (destaque) {
    destaque.style.opacity = 0;
    setTimeout(() => {
      destaque.style.transition = 'opacity 1.2s';
      destaque.style.opacity = 1;
    }, 300);
  }
});