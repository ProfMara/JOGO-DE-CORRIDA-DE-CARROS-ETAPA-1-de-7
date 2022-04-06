class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.saudacao = createElement("h2");
  }

  esconder() {
    //código para esconder o formulário

  }

  mouseClicou(){
    this.playButton.mousePressed(()=>{
      //esconder o input e  o botão


      //Criar a variável mensagem que aparece o nome do player


      //Código que põe na saudação do jogo a mensagem que está na variável

     
    })
    
  }

  definirPosicao(){
    this.titleImg.position(120,160);
    this.input.position(width/2 - 110, height /2 - 80);
    this.playButton.position(width/2 - 90, height /2 - 20);
    this.saudacao.position(width/2 - 300, height - 160);
  }

  definirEstilo(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.saudacao.class("greeting");
  }


  exibir(){
    //codigo que põe os elementos na posição correta

    //codigo que define o estilo do objeto

    //codigo que faz com que o botão ative códigos


  }
}
