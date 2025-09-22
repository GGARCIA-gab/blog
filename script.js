// Seleciona o elemento HTML com a classe 'meu-botao'
const botao = document.querySelector('.meu-botao');

// Adiciona um "ouvinte" para o evento 'mouseenter' (mouse entrando no elemento)
botao.addEventListener('mouseenter', () => {
    // Quando o mouse entra, adiciona a classe 'meu-botao-hover'
    botao.classList.add('meu-botao-hover');
});

// Adiciona um "ouvinte" para o evento 'mouseleave' (mouse saindo do elemento)
botao.addEventListener('mouseleave', () => {
    // Quando o mouse sai, remove a classe 'meu-botao-hover'
    botao.classList.remove('meu-botao-hover');
});