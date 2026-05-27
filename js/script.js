//mudando o estilo do butao "heroBotao"
function alterarEstiloDoBotao(){
  let botao = document.getElementById("heroBotao")

  botao.addEventListener('mouseover', function(){
    botao.style.backgroundColor = '#a08040'
  });
  botao.addEventListener('mouseout', function(){
    botao.style.backgroundColor = 'transparent'
  });
}
alterarEstiloDoBotao();


