const imagens = [
  "src/assets/imagem12.jpg",
  "src/assets/imagem2.jpeg",
  "src/assets/imagem3.jpeg",
  "src/assets/imagem4.jpeg"
];

let index = 0;
const slide = document.getElementById("slide-img");

function trocarImagem() {
  index = (index + 1) % imagens.length;
  slide.src = imagens[index];
}

setInterval(trocarImagem, 3000); // Troca a cada 3 segundos
