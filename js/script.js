const btnMudarTema = document.getElementById('mudar-tema');
const body = document.body;
const claro = document.getElementById('claro');
const escuro = document.getElementById('escuro');

btnMudarTema.addEventListener('click', () => {
  body.classList.toggle('tema-dark'); 

  //alterna os ícones
  if (body.classList.contains('tema-dark')) {
    claro.style.display = 'none';
    escuro.style.display = 'inline';
  } else {
    claro.style.display = 'inline';
    escuro.style.display = 'none';
  }

});
  