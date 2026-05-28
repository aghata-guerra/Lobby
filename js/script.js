const planos = [
  {
    nome: "Setup Plebeu",
    cor: "#8a5e14",
    descricao: "Perfeito para quem está começando sua jornada."
  },
  {
    nome: "Setup Cavaleiro",
    cor: "#6b1a1a",
    descricao: "Para guerreiros que exigem mais desempenho."
  },
  {
    nome: "Setup Rei",
    cor: "#e8b84b",
    descricao: "O melhor da casa. Sem desculpas."
  }
];

function configurarCardsPlanos() {
  const cards = document.querySelectorAll(".plano-item");
  const heroTitulo = document.getElementById("hero-titulo");

  if (!cards.length) return;

  cards.forEach(function (card, index) {
    card.style.cursor = "pointer";

    card.addEventListener("click", function () {
      cards.forEach(function (c) {
        c.style.borderTopColor = "#8a5e14";
        c.style.transform = "scale(1)";
        c.style.boxShadow = "none";
      });

      card.style.borderTopColor = planos[index].cor;
      card.style.transform = "scale(1.03)";
      card.style.boxShadow = "0 8px 32px rgba(0,0,0,0.35)";
      card.style.transition = "transform 0.2s, box-shadow 0.2s";

      if (heroTitulo) {
        heroTitulo.textContent = "Você escolheu: " + planos[index].nome;
      }
    });
  });
}
 
function alterarEstiloDoBotao() {
  let botao = document.getElementById("heroBotao");

   if (!botao) return;
 
  botao.addEventListener('mouseover', function () {
    botao.style.backgroundColor = '#a08040';
  });
  botao.addEventListener('mouseout', function () {
    botao.style.backgroundColor = 'transparent';
  });
}

function configurarFormulario() {
  const form = document.querySelector(".form");
 
  if (!form) return;
 
  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
 
    const inputNome = form.querySelector("input[type='text']");
    const inputTel = document.getElementById("numeroCelular");
    const inputEmail = document.getElementById("email");
    const inputSenha = document.getElementById("senha");
 
    const nome = inputNome ? inputNome.value.trim(): "";
    const tel = inputTel ? inputTel.value.trim(): "";
    const email = inputEmail ? inputEmail.value.trim(): "";
    const senha = inputSenha ? inputSenha.value.trim(): "";
 
    if (nome === "") {
      alert("Por favor, preencha o seu nome, cavaleiro.");
      return;
    }
 
    if (tel.length < 8) {
      alert("Número de celular inválido. Confira os dígitos.");
      return;
    }
 
    if (!email.includes("@") || !email.includes(".")) {
      alert("E-mail inválido. Tente novamente.");
      return;
    }   
 
    if (senha.length < 6) {
      alert("Senha muito curta. Use ao menos 6 caracteres.");
      return;
    }
 
    alert("Bem-vindo ao Lobby, " + nome + "! Sua reserva está sendo preparada.");
    form.reset();
    window.location.href = "./reserva.html";
  });
}
alterarEstiloDoBotao();
configurarCardsPlanos();
configurarFormulario();