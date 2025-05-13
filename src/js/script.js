//DECLARANDO O ARRAY DE IMAGENS

let imagens =[
    'src/assets/imagem1.jpg',
    'src/assets/imagem2.jpeg',
    'src/assets/imagem3.jpeg',
    'src/assets/imagem4.jpeg',
];

//DECLARANDO AS VARIAVEIS

let index=0;
let tempo=3000;

//CRIANDO A FUNÇÃO SLIDESHOW

function slideShow(){
    document.getElementById("image").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();