//pegando o tempo
function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos*1000); //pega milesimo se segundo, então precisa faazer *1000 para pegar segundo
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'UTC' //pega hora do local (país) 
    });
}



//pegando os buttons
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
    }, 1000);
}


//adicionando eventos
iniciar.addEventListener('click', function(evento) {
    clearInterval(timer);
    iniciaRelogio();
    relogio.style.color = 'black';
});
pausar.addEventListener('click', function(evento) {
    clearInterval(timer);
    relogio.style.color = 'red'; 
});
zerar.addEventListener('click', function(evento) {
    clearInterval(timer);
    relogio.innerHTML = ('00:00:00');
    relogio.style.color = 'black';
    segundos = 0;
});