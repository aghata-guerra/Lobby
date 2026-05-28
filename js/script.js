const planos = [
  {
    nome: "Setup Plebeu",
    cor: "#8a5e14",
    descricao: "Ideal para jogadores iniciantes."
  },

  {
    nome: "Setup Cavaleiro",
    cor: "#6b1a1a",
    descricao: "Mais desempenho para partidas competitivas."
  },

  {
    nome: "Setup Rei",
    cor: "#e8b84b",
    descricao: "Máxima performance da Lobby."
  }
];

function configurarMenuMobile() {

  const menuToggle =
    document.getElementById("menu-toggle");

  const navLinks =
    document.querySelector(".nav-links");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("aberto");

  });

}

function configurarCardsPlanos() {

  const cards =
    document.querySelectorAll(".plano-item");

  const heroTitulo =
    document.getElementById("hero-titulo");

  const heroSubtitulo =
    document.getElementById("hero-subtitulo");

  if (!cards.length || !heroTitulo || !heroSubtitulo) return;

  cards.forEach(function (card, index) {

    card.style.cursor = "pointer";

    card.addEventListener("click", function () {

      cards.forEach(function (c) {

        c.style.transform = "scale(1)";
        c.style.boxShadow = "none";
        c.style.borderTopColor = "#8a5e14";

      });

      card.style.transform = "scale(1.03)";

      card.style.boxShadow =
        "0px 8px 24px rgba(0,0,0,0.3)";

      card.style.borderTopColor =
        planos[index].cor;

      heroTitulo.textContent =
        "Você escolheu: " +
        planos[index].nome;

      heroSubtitulo.textContent =
        planos[index].descricao;

    });

  });

}

function configurarBotaoHero() {

  const botao =
    document.getElementById("hero-botao");

  if (!botao) return;

  botao.addEventListener("mouseover", function () {

    botao.style.backgroundColor =
      "#8a5e14";

    botao.style.color =
      "#ffffff";

  });

  botao.addEventListener("mouseout", function () {

    botao.style.backgroundColor =
      "transparent";

    botao.style.color =
      "#e8b84b";

  });

  botao.addEventListener("click", function () {

    const planos =
      document.querySelector(".planos-container");

    planos.scrollIntoView({
      behavior: "smooth"
    });

  });
}

function configurarBotaoReserva() {

  const botaoReserva =
    document.querySelector(".planos-botao-reserva");

  if (!botaoReserva) return;

  botaoReserva.addEventListener("click", function () {

    alert("Sua reserva será iniciada!");

    window.location.href =
      "./forms.html";

  });

}

function configurarInstagram() {

  const instagram =
    document.querySelectorAll(".instagram");

  instagram.forEach(function (icon) {

    icon.addEventListener("mouseover", function () {

      icon.style.transform =
        "scale(1.2)";

      icon.style.transition =
        "0.3s";

    });

    icon.addEventListener("mouseout", function () {

      icon.style.transform =
        "scale(1)";

    });

  });

}

function configurarBannerReserva() {

  const botao =
    document.querySelector(".banner-reserva-texto button");

  if (!botao) return;

  botao.addEventListener("click", function () {

    alert("Redirecionando para reservas!");

    window.location.href =
      "./forms.html";

  });

}

function verificarHorario() {

  const horaAtual =
    new Date().getHours();

  if (horaAtual >= 22 || horaAtual <= 6) {

    console.log("Corujão ativo!");

  } else {

    console.log("Lobby funcionando normalmente.");

  }

}


function configurarLogo() {

  const logo =
    document.getElementById("logo");

  if (!logo) return;

  logo.addEventListener("mouseover", function () {

    logo.style.transform =
      "rotate(5deg) scale(1.05)";

    logo.style.transition =
      "0.3s";

  });

  logo.addEventListener("mouseout", function () {

    logo.style.transform =
      "rotate(0deg) scale(1)";

  });

}

function configurarFormulario() {

  const formulario =
    document.querySelector(".form");

  if (!formulario) return;

  formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome =
      document.querySelector('input[type="text"]');

    const telefone =
      document.getElementById("numeroCelular");

    const email =
      document.getElementById("email");

    const senha =
      document.getElementById("senha");

    if (
      nome.value === "" ||
      telefone.value === "" ||
      email.value === "" ||
      senha.value === ""
    ) {

      alert("⚠️ Preencha todos os campos!");

      return;

    }

    formulario.style.borderTopColor =
      "#2ecc71";

    alert("✅ Cadastro enviado com sucesso!");

    formulario.reset();

  });

}
function configurarSenha() {

  const senha =
    document.getElementById("senha");

  const mostrarSenha =
    document.getElementById("mostrarSenha");

  const erroSenha =
    document.getElementById("erroSenha");

  if (!senha || !mostrarSenha) return;

  mostrarSenha.addEventListener("click", function () {

    if (senha.type === "password") {

      senha.type = "text";
      mostrarSenha.textContent = "🙈";

    } else {

      senha.type = "password";
      mostrarSenha.textContent = "🙉";

    }

  });

  senha.addEventListener("input", function () {

    if (senha.value.length < 6) {

      erroSenha.textContent =
        "A senha precisa ter pelo menos 6 caracteres.";

      senha.style.border =
        "2px solid red";

    } else {

      erroSenha.textContent = "";

      senha.style.border =
        "2px solid green";

    }

  });

}

configurarSenha();

configurarMenuMobile();

configurarCardsPlanos();

configurarBotaoHero();

configurarBotaoReserva();

configurarInstagram();

configurarBannerReserva();

verificarHorario();

configurarLogo();

configurarFormulario();