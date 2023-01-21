//sons do jogo
let raquetada;
let ponto;
let trilha;

//fundo de tela
let fundoPong;

function preload(){
  raquetada = loadSound("sons/raquetada.mp3");
  ponto = loadSound("sons/ponto.mp3");
  trilha = loadSound("sons/trilha.mp3");
  fundoPong = loadImage("imagem/pongbg.jpg");
}
