tela = 1

var xComojogar = 90; xIniciar = 260; xCreditos = 400; yMenu = 300; alturaMenu = 45; larguraMenu = 115;

var xVoltar = 525; yVoltar = 310; alturaVoltar = 20; larguraVoltar = 50;

let img;

function preload(){

  soundFormats('mp3', 'ogg');
  somLimao = loadSound('somlimao.mp3');
  somUva = loadSound('somuva.mp3');
  somMaca = loadSound('sommaca.mp3');
  
  //Imagens
  imgMenu = loadImage('capa.png');
  imgTela = loadImage('planodefundo.png');  
      //Creditos
  imgDenise = loadImage('fotodenise.png');
  imgRafaella = loadImage('fotorafaella.png');
      //Jogo
  som = loadImage('altofalante.png');
  voltar = loadImage('voltar.png');
          //Jogo - Frutas
  macapng = loadImage('frutamaca.png'); 
  limaopng = loadImage('frutalimao.png');
  uvapng= loadImage('frutauva.png');
          //Jogo - Silabas
  slbuva1 =loadImage('slbu.png');
  slbuva2 =loadImage('slbva.png');
  slblimao1 =loadImage('slbli.png');
  slblimao2 =loadImage('slbmao.png');
  slbmaca1 =loadImage('slbma.png');
  slbmaca2 =loadImage('slbca.png');
  
}

function setup() {
  createCanvas(625, 350);  
}

function draw() {

  // Tela Menu Inicial
  if (tela == 1) {
    image(imgMenu, 0, 0); {
      // Botão Executar jogo
      if (mouseX > xIniciar && mouseX < xIniciar + larguraMenu && mouseY > yMenu && mouseY < yMenu + alturaMenu) {
        noStroke();
        fill(77, 252, 77);
        rect(xIniciar, yMenu, larguraMenu, alturaMenu, 20);
        if (mouseIsPressed) {
          tela = 3;
        }
      }
      textStyle(BOLD);
      textSize(28);
      fill(0);
      text('JOGAR', 265, 330);

      // Botão Como jogar            
      if (mouseX > xComojogar && mouseX < xComojogar + larguraMenu && mouseY > yMenu && mouseY < yMenu + alturaMenu) {
        noStroke();
        fill(237, 215, 50);
        rect(xComojogar, yMenu, larguraMenu, alturaMenu, 20);
        if (mouseIsPressed) {
          tela = 2;
        }
      }
      textStyle(BOLDITALIC);
      textSize(18);
      fill(0);
      text('Instruções', 100, 330);

      
      // Botão Créditos
      if (mouseX > xCreditos && mouseX < xCreditos + larguraMenu && mouseY > yMenu && mouseY < yMenu + alturaMenu) {
        noStroke();
        fill(219, 175, 228);
        rect(xCreditos, yMenu, larguraMenu, alturaMenu, 20);
        if (mouseIsPressed) {
          tela = 7;
        }
      }
      textStyle(BOLDITALIC);
      textSize(18);
      fill(0);
      text('Créditos', 425, 330);
    }
  } // Fim da tela Inicial

  // Tela Como Jogar
  if (tela == 2) {
    image(imgTela, 0, 0);
    rect(90, 40, 470, 270);
    fill(240);

    textAlign(CENTER);
    textStyle(BOLD);
    textSize(28);
    fill(29, 17, 83);
    text("Como Jogar", 0, 70, width);

    textSize(16);
    fill(29, 17, 83);
    textAlign(CENTER);
    text(" > Escolha uma das frutas na tela;\n\n   > Clique no autofalante para ouvir a pronúncia;\n\n> Clique nas sílabas que formam a palavra;\n ::Verde = você acertou\n ::Vermelho = tente outra vez.", 0, 140, width)

    fill(237, 215, 50);
    rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 20);
    noStroke();

    //Botão voltar à tela inicial  
    if (mouseX > xVoltar && mouseX < xVoltar + larguraVoltar && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar) {
      if (mouseIsPressed) {
        tela = 1;
      }
    }

  } // Fim da tela Como Jogar 
 
  //Tela Jogar-Menu das frutas
  if(tela == 3){
    background(240);

    text('Escolha uma fruta para jogar', 0, 70, width);
    textAlign(CENTER, TOP);
    textSize(28);
    
    image(limaopng, 150, 120);
    image(uvapng, 250, 120);
    image(macapng, 350, 120);
     
    if(mouseX >150 && mouseX<240 && mouseY > 120 && mouseY<230){
      if(mouseIsPressed){
        tela=4;
      }
    }
    
    if(mouseX >250 && mouseX<340 && mouseY > 120 && mouseY<230){
      if(mouseIsPressed){
        tela=5;
      }
    }
    
    if(mouseX >350 && mouseX<440 && mouseY > 120 && mouseY<230){
      if(mouseIsPressed){
        tela=6;
      }
    }       
  
    //Botão voltar à tela inicial
    
    rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 20);
    fill(237, 215, 50);
    noStroke();

    if (mouseX > xVoltar && mouseX < xVoltar + larguraVoltar && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar) {
      if (mouseIsPressed) {
        tela = 1;
      }
    }    
  
  } // Fim da tela Menu das frutas
  
  //Tela de jogo Limão
  if(tela == 4){
  background(240);
  image(som, 100, 55);
  image(limaopng, 250, 30);

  if(mouseX > 100 && mouseX<150 && mouseY > 55 && mouseY < 100){
      if (mouseIsPressed){
        somLimao.play()
      }
    }

  fill(240);
  
  rect(25, 180, 80, 60, 20);
  rect(125, 180, 80, 60, 20);
  rect(225, 180, 80, 60, 20);
  rect(325, 180, 80, 60, 20);
  rect(425, 180, 80, 60, 20);
  rect(525, 180, 80, 60, 20);
  
  //silabas
  
  image(slbuva1, 25, 180);
  image(slbuva2, 425, 180);
  image(slbmaca1, 125, 180);
  image(slbmaca2, 325, 180);
  image(slblimao1, 225, 180);
  image(slblimao2, 525, 180);
  
    //IF's silabas
  
  if (mouseX > 25 && mouseX < 105 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(25, 180, 80, 60, 20);
    }
  }
  
  if (mouseX > 125 && mouseX < 205 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(125, 180, 80, 60, 20);
    }
  }
  
  if (mouseX > 225 && mouseX < 305 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(90, 251, 93);
      rect(225, 180, 80, 60, 20);
    }
  }  

  if (mouseX > 325 && mouseX < 405 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(325, 180, 80, 60, 20);
    }
  }

  if (mouseX > 425 && mouseX < 505 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(425, 180, 80, 60, 20);
    }
  }  

  if (mouseX > 525 && mouseX < 605 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(90, 251, 93);
      rect(525, 180, 80, 60, 20);
    }
  }  
    
    
    //Botão voltar Menu Frutas
  image(voltar, 525, 310);
  if (mouseX > 525 && mouseX < 575 && mouseY > 310 && mouseY < 330) {
    if (mouseIsPressed) {
      tela = 3;
    }
  }

  } // Fim da tela de jogo Limão
  
  //Tela de jogo Uva
  if(tela == 5){
  background(240);
  image(som, 100, 55);
  image(uvapng, 250, 30);

  if(mouseX > 100 && mouseX<150 && mouseY > 55 && mouseY < 100){
      if (mouseIsPressed){
        somUva.play()
      }
    }

  fill(240);
  
  rect(25, 180, 80, 60, 20);
  rect(125, 180, 80, 60, 20);
  rect(225, 180, 80, 60, 20);
  rect(325, 180, 80, 60, 20);
  rect(425, 180, 80, 60, 20);
  rect(525, 180, 80, 60, 20);
  
  //silabas
  
  image(slbuva1, 25, 180);
  image(slbuva2, 425, 180);
  image(slbmaca1, 125, 180);
  image(slbmaca2, 325, 180);
  image(slblimao1, 225, 180);
  image(slblimao2, 525, 180);
  
    //IF's silabas
  
  if (mouseX > 25 && mouseX < 105 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(90, 251, 93);
      rect(25, 180, 80, 60, 20);
    }
  }
  
  if (mouseX > 125 && mouseX < 205 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(125, 180, 80, 60, 20);
    }
  }
  
  if (mouseX > 225 && mouseX < 305 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(225, 180, 80, 60, 20);
    }
  }  

  if (mouseX > 325 && mouseX < 405 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(325, 180, 80, 60, 20);
    }
  }

  if (mouseX > 425 && mouseX < 505 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(90, 251, 93);
      rect(425, 180, 80, 60, 20);
    }
  }  

  if (mouseX > 525 && mouseX < 605 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(525, 180, 80, 60, 20);
    }
  }  


    //Botão voltar Menu Frutas
  image(voltar, 525, 310);
  if (mouseX > 525 && mouseX < 575 && mouseY > 310 && mouseY < 330) {
    if (mouseIsPressed) {
      tela = 3;
    }
  }

  } // Fim da tela de jogo Uva
  
  //Tela de jogo Maçã
  if(tela == 6){
  background(240);
  image(som, 100, 55);
  image(macapng, 250, 30);

  if(mouseX > 100 && mouseX<150 && mouseY > 55 && mouseY < 100){
      if (mouseIsPressed){
        somMaca.play()
      }
    }

  fill(240);
  
  rect(25, 180, 80, 60, 20);
  rect(125, 180, 80, 60, 20);
  rect(225, 180, 80, 60, 20);
  rect(325, 180, 80, 60, 20);
  rect(425, 180, 80, 60, 20);
  rect(525, 180, 80, 60, 20);
  
  //silabas
  
  image(slbuva1, 25, 180);
  image(slbuva2, 425, 180);
  image(slbmaca1, 125, 180);
  image(slbmaca2, 325, 180);
  image(slblimao1, 225, 180);
  image(slblimao2, 525, 180);
  
    //IF's silabas
  
  if (mouseX > 25 && mouseX < 105 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(25, 180, 80, 60, 20);
    }
  }
  
  if (mouseX > 125 && mouseX < 205 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(90, 251, 93);
      rect(125, 180, 80, 60, 20);
    }
  }
  
  if (mouseX > 225 && mouseX < 305 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(225, 180, 80, 60, 20);
    }
  }  

  if (mouseX > 325 && mouseX < 405 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(90, 251, 93);
      rect(325, 180, 80, 60, 20);
    }
  }

  if (mouseX > 425 && mouseX < 505 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(425, 180, 80, 60, 20);
    }
  }  

  if (mouseX > 525 && mouseX < 605 && mouseY > 180 && mouseY < 240){
    if (mouseIsPressed){
      fill(254, 3, 3);
      rect(525, 180, 80, 60, 20);
    }
  }  

    //Botão voltar Menu Frutas
  image(voltar, 525, 310);
  if (mouseX > 525 && mouseX < 575 && mouseY > 310 && mouseY < 330) {
    if (mouseIsPressed) {
      tela = 3;
    }
    }

  } // Fim da tela de jogo Maçã
  
  // Tela Créditos
  if (tela == 7) {

    image(imgTela, 0, 0); {

      rect(20, 20, 585, 320);
      noStroke();
      fill(29, 17, 83); {
        textAlign(CENTER, TOP);
        textSize(20);
        text("Informações e créditos:", 0, 50, width);

        image(imgDenise, 420, 180);
        image(imgRafaella, 115, 180);

        textAlign(CENTER);
        textSize(12);

        text("Rafaella Hochscheidt - Consultora\nPedagoga, UnP, 2016", 145, 270);
        text("Denise Mendonça - Programadora\nGraduanda em Ciências e Tecnologia, UFRN", 445, 270);

        textAlign(LEFT);
        textSize(14);
        text("              'Barraca das Frutas' é um jogo educacional voltado para alunos do 2º ano \ndo Ensino Fundamental. Brincando com o nome das frutas, eles irão exercitar a \nformação silábica das palavras (ref. habilidades BNCC EF02LP04 e EF02LP05).", 40, 85);
      }

      //Botão voltar ao Menu Inicial
      rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 20);
      fill(237, 215, 50);
      noStroke();

      if (mouseX > xVoltar && mouseX < xVoltar + larguraVoltar && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar) {
        if (mouseIsPressed) {
          tela = 1;
        }
      }
    } // Fim da tela Créditos
  } // Fim da tela de Créditos 
  
}