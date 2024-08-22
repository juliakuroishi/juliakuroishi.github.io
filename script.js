const btnMudarTema = document.getElementById('mudar-tema');
const body = document.body;

btnMudarTema.addEventListener('click', () => {
  body.classList.toggle('tema-dark'); });