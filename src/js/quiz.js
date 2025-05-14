//EVENTO CARREGA A PAGINA AUTOMATICAMENTE
document.addEventListener('DOMContentLoaded', () => {

    // ALERTA DE BOAS-VINDAS
    alert("Bem-vindo! Responda às perguntas sobre carros elétricos e veja seu resultado ao final.");

    // VARIÁVEIS DO DOM
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById('proximo');
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn');
    const imagemCarro = document.getElementById('imagem-carro'); // imagem final do carro

    // ARRAY DE PERGUNTAS
    const questoes = [
        "O que te levou a considerar a compra de um carro elétrico?",
        "O custo com combustível foi um fator importante na sua decisão?",
        "Você pensou em questões ambientais ao escolher um carro elétrico?",
        "Quais benefícios financeiros você encontrou ao optar por um carro elétrico (isenções de impostos, menor manutenção, etc.)?",
        "Você teve alguma influência de amigos, familiares ou mídia para comprar um carro elétrico?",
        "O que você mais gosta na experiência de dirigir um carro elétrico?",
        "Você acha que os carros elétricos são mais confortáveis ou silenciosos que os carros a combustão?",
        "A aceleração e desempenho do carro elétrico te agradam?",
        "Você se sente bem por contribuir com a redução da poluição ao usar um carro elétrico?",
        "Você recomendaria um carro elétrico para outras pessoas? Por quê?"
    ];

    let indicePergunta = 0;
    const respostas = [];

    // FUNÇÃO MOSTRAR PERGUNTA ATUAL
    function mostrarPergunta() {
        if (indicePergunta < questoes.length) {
            pergunta.textContent = questoes[indicePergunta];
            resposta.value = '';
            mensagem.textContent = '';
        } else {
            mostrarResultado();
        }
    }

    // FUNÇÃO MOSTRAR RESULTADO FINAL + IMAGEM DO CARRO
    function mostrarResultado() {
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        imagemCarro.classList.remove('hidden');

        listaResultado.innerHTML = '';

        questoes.forEach((questao, i) => {
            const listaItem = document.createElement('li');
            listaItem.innerHTML = `<strong>${questao}</strong><br> Sua Resposta: <span>${respostas[i]}</span>`;
            listaResultado.appendChild(listaItem);
        });
    }

    // AVANÇAR PARA A PRÓXIMA QUESTÃO
    function proximaQuestao() {
        const respostaAtual = resposta.value.trim();
        if (respostaAtual === '') {
            mensagem.textContent = "Por favor, digite sua resposta.";
            return;
        }

        respostas.push(respostaAtual);
        indicePergunta++;
        mostrarPergunta();
    }

    // REINICIAR O QUIZ
    function reiniciarQuiz() {
        indicePergunta = 0;
        respostas.length = 0;
        containerResultado.classList.add('hidden');
        imagemCarro.classList.add('hidden');
        containerPerguntas.classList.remove('hidden');
        mostrarPergunta();
    }

    // EVENTOS
    proximaPergunta.addEventListener('click', proximaQuestao);
    reiniciarBotao.addEventListener('click', reiniciarQuiz);

    // INÍCIO DO QUIZ
    mostrarPergunta();
});
