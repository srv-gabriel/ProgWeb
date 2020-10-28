let ganhou = true;

let jogadas = {
    1 : 'Pedra',
    2 : 'Papel',
    3 : 'Tesoura'
}

let computador = [1,2,3];
let vitorias = [[2,0,1], 
                [1,2,0],
                [0,1,2]];

let resultados = {
    1: 'Ganhou',
    0: 'Perdeu',
    2: 'Empatou'
}

let pontos = 0;

while(ganhou){

    console.log('Escolha sua jogada: ');
    console.log('1 - Pedra ');
    console.log('2 - Papel');
    console.log('3 - Tesoura');

    let jogada = parseInt(prompt());

    if(jogada !== jogada || (jogada < 1 || jogada > 3)){
        console.log('Sua jogada foi inválida, será gerada uma jogada aleatória para você');

        jogada = computador[Math.floor(Math.random() * computador.length)];
    }

    
    console.log('Sua jogada foi: ' + jogadas[jogada]);
    jogada_computador = computador[Math.floor(Math.random() * computador.length)];
    console.log('O Computador jogou: ' + jogadas[jogada_computador]);

    let result = vitorias[jogada-1][jogada_computador-1];

    if(result === 0){
        console.log('Você perdeu, quem sabe na próxima :(');
        console.log('Você conseguiu ' + pontos + ' pontos.');
        ganhou = false;
    }
    else{
        console.log('Você ' + resultados[result]);

        if(result === 1){
            pontos++;
        }
    }
    
    
}