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
