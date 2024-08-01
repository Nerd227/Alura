// Esta função é chamada uma vez quando o programa é inicializado
function setup() {
    // Cria um espaço de desenho com largura 930 e altura 650
    createCanvas(930, 650);
    // Define a cor de fundo do espaço de desenho para um tom de verde-azulado
    background("rgb(149,240,221)");
  }
  
  // Esta função é chamada repetidamente para desenhar os elementos na tela
  function draw() {
    // Define a largura do contorno das formas para 4 pixels
    strokeWeight(4);
    // Define a cor de preenchimento para amarelo
    fill("yellow");
  
    // Verifica se o botão do mouse está pressionado
    if (mouseIsPressed) {
      // Desenha um retângulo na posição do mouse com largura 20 e altura 35
      rect(mouseX, mouseY, 20, 35);
    }
  }