$(document).ready(function () {
  // Smooth scrolling para links
  $("a.nav-link, .btn-scroll").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Adiciona classe ao header quando scrollar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("header-scrolled");
    } else {
      $("header").removeClass("header-scrolled");
    }
  });

  // Animação dos elementos quando aparecem na tela
  const animateOnScroll = function () {
    const elements = $(".animate-on-scroll");

    elements.each(function () {
      const element = $(this);
      const elementPosition = element.offset().top;
      const windowHeight = $(window).height();
      const scrollPosition = $(window).scrollTop();

      if (elementPosition < scrollPosition + windowHeight - 100) {
        element.addClass("animate__animated animate__fadeInUp");
      }
    });
  };

  $(window).on("scroll", animateOnScroll);
  animateOnScroll();

  // Validação de formulário de contato
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    if (name === "" || email === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }

    // Simulação de envio
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    $(this).trigger("reset");
  });
});

// Simulação de login (em um sistema real, isso seria feito no backend)
$(document).ready(function () {
  // Verificar se está na página de login
  if (window.location.pathname.includes("login.html")) {
    $("#loginForm").submit(function (e) {
      e.preventDefault();
      const email = $("#email").val();
      const senha = $("#senha").val();

      // Credenciais de administrador (apenas para demonstração)
      const adminEmail = "admin@digitalize.com";
      const adminSenha = "admin123";

      if (email === adminEmail && senha === adminSenha) {
        // Redirecionar para a área administrativa
        window.location.href = "admin.html";
      } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
      }
    });
  }

  // Simulação de armazenamento de empresas cadastradas
  if (typeof localStorage.empresasCadastradas === "undefined") {
    localStorage.setItem("empresasCadastradas", JSON.stringify([]));
  }

  // Processar formulário de cadastro de empresa
  if (window.location.pathname.includes("cadastro-empresa.html")) {
    $("#empresaForm").submit(function (e) {
      e.preventDefault();

      // Coletar dados do formulário
      const empresa = {
        id: Date.now(),
        razaoSocial: $("#razaoSocial").val(),
        nomeFantasia: $("#nomeFantasia").val(),
        cnpj: $("#cnpj").val(),
        segmento: $("#segmento").val(),
        responsavelNome: $("#responsavelNome").val(),
        responsavelCargo: $("#responsavelCargo").val(),
        responsavelEmail: $("#responsavelEmail").val(),
        responsavelTelefone: $("#responsavelTelefone").val(),
        servicos: [],
        observacoes: $("#observacoes").val(),
        status: "pendente",
        dataCadastro: new Date().toLocaleDateString(),
      };

      // Adicionar serviços selecionados
      if ($("#servicoSite").is(":checked")) empresa.servicos.push("site");
      if ($("#servicoEcommerce").is(":checked"))
        empresa.servicos.push("ecommerce");
      if ($("#servicoMarketing").is(":checked"))
        empresa.servicos.push("marketing");
      if ($("#servicoSeo").is(":checked")) empresa.servicos.push("seo");

      // Salvar no localStorage
      const empresas = JSON.parse(localStorage.getItem("empresasCadastradas"));
      empresas.push(empresa);
      localStorage.setItem("empresasCadastradas", JSON.stringify(empresas));

      // Feedback para o usuário
      alert(
        "Cadastro enviado com sucesso! Nossa equipe entrará em contato para confirmar seu cadastro."
      );
      $(this).trigger("reset");
    });
  }
});
