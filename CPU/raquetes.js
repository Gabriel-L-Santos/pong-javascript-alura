//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function mostraRaquete(xRaquete, yRaquete){
  fill(color(0,0,255));
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente){
  fill(color(255,0,0));
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  } 
  if (yRaquete + raqueteAltura > height){
    yRaquete = height - raqueteAltura
  }
  if (yRaquete < 0){
    yRaquete = 0
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}