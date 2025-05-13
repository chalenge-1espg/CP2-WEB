//DECLARANDO O ARRAY DE IMAGENS

let imagens =[
    'src/assets/universo.jpg',
    'src/assets/praia.jpg',
    'src/assets/montanhas.jpg',
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