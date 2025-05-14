const imagens = [
  "src/assets/imagem12.jpg",
  "src/assets/imagem2.jpeg",
  "src/assets/imagem3.jpeg",
  "src/assets/imagem1.jpg",
  "src/assets/imagem5.jpg",
  "src/assets/imagem6.jpg",
  "src/assets/imagem7.jpg",
  "src/assets/imagem10.jpg",
  "src/assets/imagem11.jpg",
  "src/assets/imagem8.jpg",
  "src/assets/imagem9.jpg",
  "src/assets/imagem4.jpg",
];

let index = 0;
const slide = document.getElementById("slide-img");

function trocarImagem() {
  index = (index + 1) % imagens.length;
  slide.src = imagens[index];
}

setInterval(trocarImagem, 2000); // Troca a cada 3 segundos
