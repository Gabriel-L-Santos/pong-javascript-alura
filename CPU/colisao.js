//variáveis colisao
let colidiu = false;

function verificaColisaoBorda(){
  if (xBolinha + raio > width || 
      xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  } 
  if (yBolinha + raio > height || 
      yBolinha - raio < 0){ 
      velocidadeYBolinha *= -1;
   } 
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento
      && yBolinha - raio < yRaquete + raqueteAltura 
      && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  } 
}

function verificaColisaoRaquete(x, y){
 colidiu = 
collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}