// script.js
document.addEventListener('DOMContentLoaded', () => {
  // ---- Animação das barras ----
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar, i) => {
    // guarda cor original
    const orig = getComputedStyle(bar).backgroundColor;
    bar.dataset.orig = orig;
    // parte de 0 e anima width
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.transition = 'width 0.6s ease-out';
      bar.style.width = '100%';
    }, i * 150);

    // hover: pinta de branco e dá “zoom” vertical
    bar.addEventListener('mouseenter', () => {
      bar.style.backgroundColor = '#fff';
      bar.style.transform = 'scaleY(1.5)';
    });
    bar.addEventListener('mouseleave', () => {
      bar.style.backgroundColor = bar.dataset.orig;
      bar.style.transform = 'scaleY(1)';
    });
  });

  // ---- Efeito ripple nos botões ----
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';

    btn.addEventListener('click', e => {
      const circle = document.createElement('span');
      circle.classList.add('ripple');
      btn.appendChild(circle);

      // tamanho do círculo
      const d = Math.max(btn.clientWidth, btn.clientHeight);
      circle.style.width = circle.style.height = d + 'px';

      // posição do clique
      const rect = btn.getBoundingClientRect();
      circle.style.left = `${e.clientX - rect.left - d/2}px`;
      circle.style.top  = `${e.clientY - rect.top  - d/2}px`;

      // remove depois de animar
      setTimeout(() => circle.remove(), 600);
    });
  });
});
