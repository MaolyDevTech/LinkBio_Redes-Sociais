// script.js

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-slide');
  const footer  = document.querySelector('.footer-stripes');

  buttons.forEach(button => {
    // Define a cor da rede social na variável CSS
    const color = button.getAttribute('data-color');
    button.style.setProperty('--btn-color', color);

    button.addEventListener('click', event => {
      event.preventDefault();

      // Remove o estado "selected" de todos os botões
      buttons.forEach(btn => btn.classList.remove('selected'));

      // Adiciona "selected" ao botão clicado
      button.classList.add('selected');

      // Transforma o rodapé em P&B alternando faixa a faixa
      footer.classList.add('bw');
    });
  });
});
