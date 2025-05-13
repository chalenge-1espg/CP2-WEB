//EVENTO CARREGA A PAGINA AUTOMATICAMENTE
document.addEventListener('DOMContentLoaded', ()=>{
    //DECLARANDO AS VARIAVEIS
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta =document.getElementById('proximo');
    const mensagem = document.getElementById('message');
    const containerPerguntas =document.getElementById('container-perguntas');
    const containerResultado =document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn');
    
    //DECLARANDO ARRAY DE PERGUNTAS
    const questoes =[
        "O que te levou a considerar a compra de um carro elétrico?",
        "O custo com combustível foi um fator importante na sua decisão?",
        "Você pensou em questões ambientais ao escolher um carro elétrico?",
        "Quais benefícios financeiros você encontrou ao optar por um carro elétrico (isenções de impostos, menor manutenção, etc.)?",
        "Você teve alguma influência de amigos, familiares ou mídia para comprar um carro elétrico?",
        "O que você mais gosta na experiência de dirigir um carro elétrico?",
        "Você acha que os carros elétricos são mais confortáveis ou silenciosos que os carros a combustão?",
        "A aceleração e desempenho do carro elétrico te agradam?",
        "Você se sente bem por contribuir com a redução da poluição ao usar um carro elétrico?",
        "Você recomendaria um carro elétrico para outras pessoas? Por quê?",

    ];
    
    //DECLARANDO AS VARIAVEIS
    let perguntas =0;
    const respostas = [];
    
    //CRIANDO A FUNÇÃO MOSTRAR PERGUNTA
    
    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent=questoes[perguntas];
            resposta.value='';
            mensagem.textContent='';
        }else{
            mostrarResultado();
        }
    }
    
    //CRIANDO A FUNÇÃO MOSTRAR RESULTADO
    
    function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';
    
        questoes.forEach((questoes,i)=>{
                const listaItem =document.createElement('li');
                listaItem.innerHTML=`<strong>${questoes}</strong><br>
                Sua Resposta: <span>${respostas[i]}</span>`
                listaResultado.appendChild(listaItem);
            })
        }
    
        //FUNÇÃO PARA PROXIMA PERGUNTA
    
        function nextQuestao(){
            const respostaAtual = resposta.value.trim();
            if(respostaAtual === ''){
                mensagem.textContent="Por favor , digite sua resposta";
                return;
            }
            respostas.push(respostaAtual);
            perguntas++;
            mostrarPergunta();
        }
    
        function reiniciarQuiz(){
            perguntas =0;
            respostas.length =0;
            containerResultado.classList.add('hidden');
            containerPerguntas.classList.remove('hidden');
            mostrarPergunta();
        }
        proximaPergunta.addEventListener('click',nextQuestao);
        reiniciarBotao.addEventListener('click',reiniciarQuiz);
        mostrarPergunta();
    
    })