document.addEventListener('DOMContentLoaded', function () {
  let parceiros = [];
  let currentIndex = 0;

  const slides = document.querySelectorAll('.partner');
  const imgEls = document.querySelectorAll('.carousel-img');
  const titleEls = document.querySelectorAll('.partner h2');

  function updateCarousel() {
    if (parceiros.length === 0) return;

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

  // Carregar dados do JSON
  fetch('parceiros.json')
    .then(response => response.json())
    .then(data => {
      parceiros = data;
      updateCarousel();
    })
    .catch(error => console.error('Erro ao carregar parceiros:', error));
});