document.addEventListener('DOMContentLoaded', function () {
  const parceiros = [
    {
      src: "https://picsum.photos/id/1011/300/300",
      alt: "Parceiro 1",
      id: "1",
      nome: "Empresa 1"
    },
    {
      src: "https://picsum.photos/id/1012/300/300",
      alt: "Parceiro 2",
      id: "2",
      nome: "Empresa 2"
    },
    {
      src: "https://picsum.photos/id/1013/300/300",
      alt: "Parceiro 3",
      id: "3",
      nome: "Empresa 3"
    },
    {
      src: "https://picsum.photos/id/1015/300/300",
      alt: "Parceiro 4",
      id: "4",
      nome: "Empresa 4"
    },
    {
      src: "https://picsum.photos/id/1016/300/300",
      alt: "Parceiro 5",
      id: "5",
      nome: "Empresa 5"
    }
  ];

  let currentIndex = 0;

  const slides = document.querySelectorAll('.partner');
  const imgEls = document.querySelectorAll('.carousel-img');
  const titleEls = document.querySelectorAll('.partner h2');

  function updateCarousel() {
    const total = parceiros.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    const indices = [prevIndex, currentIndex, nextIndex];

    indices.forEach((index, i) => {
      imgEls[i].src = parceiros[index].src;
      imgEls[i].alt = parceiros[index].alt;
      imgEls[i].setAttribute('data-id', parceiros[index].id);
      titleEls[i].textContent = parceiros[index].nome;
    });
  }

  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + parceiros.length) % parceiros.length;
    updateCarousel();
  });

  document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % parceiros.length;
    updateCarousel();
  });

  document.querySelectorAll('.partner.main img')[0].addEventListener('click', () => {
    const partnerId = imgEls[1].getAttribute('data-id');
    window.open(`detalhes.html?id=${partnerId}`, '_blank');
  });

  updateCarousel(); 
});