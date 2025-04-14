const botao = document.getElementById('btnFujao');

botao.addEventListener('mouseover', () => {
  const largura = window.innerWidth;
  const altura = window.innerHeight;

  const maxX = largura - botao.offsetWidth;
  const maxY = altura - botao.offsetHeight;

  const posX = Math.random() * maxX;
  const posY = Math.random() * maxY;

  botao.style.left = `${posX}px`;
  botao.style.top = `${posY}px`;
});
