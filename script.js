const NUM_Sans = 50
const TEMPO_INICIAL = 20;
let pontos = 0;
let tempo = 0;
let timer = null;

function iniciaJogo(){
    pontos = 0;
    tempo = TEMPO_INICIAL;
    let tela = document.getElementById("tela");
    tela.innerHTML = "";
    for (let i = 0; i <NUM_Sans; ++i){
    let troll = document.createElement("img");
    troll.src = "trollfacer.png";
    troll.id = "m" + i;
    troll.onclick = function(){
        pegatroll(this);
    }
    tela.appendChild(troll);
    }
    timer = setInterval(contaTempo, 1000);
}
function pegatroll(troll){
    if (tempo <= 0) return; // early turn
    troll.onclick = null;
    troll.src = "sans malha.png"
    ++pontos;
    
    let contadorPutos = document.getElementById("pontos");
    contadorPutos.innerHTML = pontos;
}
function contaTempo(){
    --tempo;
    let contadoTempo = document.getElementById ("tempo");
    contadoTempo.innerText = tempo;

    if(tempo <= 0){
    clearInterval(timer);
    alert("Muito bem, você libertou a maldição, voce libertou " + pontos + " Sans!");
    iniciaJogo();
    }
}
