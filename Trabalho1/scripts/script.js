(function () {

  const FPS = 1;

  // Dimensões do jogo
  let dimensao_tela = [1243, 860];
  let dimensao_fogo = [100, 130];
  let dimensao_caveira = [120,136];
  let dimensao_queimada = [250,250];
  let dimensao_placar = [300, 900]

  // probabilidades do fogo e da caveira aparecerem
  let probabilidade_fogo = 60;
  let probabilidade_caveira = 40;


  let reserva;
  let vidas;
  let gameLoop;
  let pontuacao;

  let foguinhos = [];
  let caveiras = [];
  let vidasAux = [];
  let pts = 0;

  function init() {
    reserva = new Reserva();
    vidas = new Vidas();
    pontuacao = new Pontuacao();
  }

  class Reserva {

    constructor () {
      this.element = document.createElement("div");
      this.element.className = "reserva";
      this.element.style.width = `${dimensao_tela[0]}px`;
      this.element.style.height = `${dimensao_tela[1]}px`;
      document.body.appendChild(this.element);
    }
  }

  class Vidas {

    constructor () {
      for(let i = 0; i < 5; i++){
        let set_vidas = document.createElement("div");
        set_vidas.className = "vidas";
        document.body.appendChild(set_vidas);
        vidasAux.push(set_vidas);
      }
    }

    // Diminui 1 da vida do jogador
    perde_vida(qtd) {
      var aux = qtd;

      while (aux > 0 && vidasAux.length > 0) {
        let lifeRemove = vidasAux.pop();
        document.body.removeChild(lifeRemove);
        aux -= 1;
      }
    }
  }

  class Fogo {

    constructor() {
      this.element = document.createElement("div");
      this.element.className = "fogo"; 
      this.element.style.width = `${dimensao_fogo[0]}px`;
      this.element.style.height = `${dimensao_fogo[1]}px`;

      let pos_left = Math.floor(Math.random() * (dimensao_tela[0] - dimensao_fogo[0]));

      this.element.style.left = `${pos_left}px`;
      
      this.element.style.top = `${Math.floor(Math.random() * (dimensao_tela[1] - dimensao_fogo[1]))}px`;
      reserva.element.appendChild(this.element);

      this.element.onmouseup = (event) => {
        event.target.remove();
        this.element = null;
        pts += 10;
        incrementa_ponto(pts);
      };

      setTimeout(() => {
        if (this.element != null) {
          this.element.style.backgroundImage = "url(../Trabalho1/css/assets/devastacao.png)";
          this.element.style.width = `${dimensao_queimada[0]}px`;
          this.element.style.height = `${dimensao_queimada[1]}px`;
          this.element.style.left = `${pos_left - 70}px`
          vidas.perde_vida(1);
          this.element.onmouseup = null;
        }
      }, 2000 / FPS);
    }
  }

  class Caveiras {

    constructor() {

      this.element = document.createElement("div");

      this.element.className = "caveiras";
      this.element.style.width = `${dimensao_caveira[0]}px`;
      this.element.style.height = `${dimensao_caveira[1]}px`;
      let pos_left = Math.floor( Math.random() * (dimensao_tela[0] - dimensao_caveira[0]) );
      this.element.style.left = `${pos_left}px`;
      this.element.style.top = `${Math.floor(Math.random() * (dimensao_tela[1] - dimensao_caveira[1]) )}px`;
      reserva.element.appendChild(this.element);

      this.element.onmouseup = (event) => {
        event.target.remove();
        this.element = null;

        pts += 20;
        incrementa_ponto(pts);
      };

      setTimeout(() => {
        if (this.element != null) {
          this.element.style.backgroundImage = "url(../Trabalho1/css/assets/devastacao.png)";
          this.element.style.width = `${dimensao_queimada[0]}px`;
          this.element.style.height = `${dimensao_queimada[1]}px`;
          this.element.style.left = `${pos_left - 70}px`
          this.element.className = "devastacao_caveira";
          vidas.perde_vida(2);
          this.element.onmouseup = null;
        }
      }, 2000 / FPS);
    }
  }

  class Pontuacao {

    constructor () {
      this.element = document.createElement("h1");
      this.element.id = "pontuacao";
      this.element.style.width = `${dimensao_placar[0]}px`;
      this.element.style.height = `${dimensao_placar[1]}px`;
      this.element.innerHTML= `00000`
      document.body.appendChild(this.element);
    }
  }

  // Aumenta 10 pontos na pontuação atual do jogador
  function incrementa_ponto(valor){
    valorAux = valor.toString();
    var tam = 5 - valorAux.length;
    var valorIncremental = "";
    for(let i=0; i < tam; i++){
      valorIncremental += "0";
    }
    var pontuacao = document.getElementById("pontuacao");
    pontuacao.innerHTML = valorIncremental+valorAux;
  
  }

  function run () {
    if (Math.random() * 100 < probabilidade_fogo) {
      let foco = new Fogo();
      foguinhos.push(foco);
    }

    if (Math.random() * 100 < probabilidade_caveira) {
      let caveira = new Caveiras();
      caveiras.push(caveira);
    }
  }

  // Inicia o jogo
  window.addEventListener("keydown", function (e) {
       if (e.key === 's') {
      gameLoop = setInterval(run, 1000/FPS);
    }
      if (e.key === 'p') {
      clearInterval(gameLoop);
    }
  })

  init();
})();

