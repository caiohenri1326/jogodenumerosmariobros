function diminuirVida(damage){
    const life = document.getElementById('life');
    const numeroVida = document.getElementById('NumeroVida');
    
    const vidaAtual = parseInt(numeroVida.innerHTML) || 100;
    const novaVida = vidaAtual - 20;
    numeroVida.innerText = novaVida + '%';
    if(novaVida >= 80){
        life.style.width = novaVida + 'px';
        life.style.background = 'rgb(198, 255, 124)';
    }
    else if(novaVida >= 60){
        life.style.width = novaVida + 'px';
        life.style.background = 'rgb(255, 218, 7)'
    }
    else if(novaVida >= 40){
        life.style.width = novaVida + 'px';
        life.style.background = 'rgb(245, 149, 6)'
    }
    else if(novaVida >= 20){
        life.style.width = novaVida + 'px';
        life.style.background = 'rgb(172, 4, 4)';
    }
    else if(novaVida == 0){
        life.style.width = novaVida + 'px';
        palpite.innerHTML = 'Infelizmente Voce perdeu :(<br><br>Reset o game para tentar novamente!';
        palpite.style.fontSize = '13px';
    }
    else{

    }
}
function reset(btn){
    location.reload();
}
function numeroAleatorio(){
    computador = (parseInt(Math.random() * 10));
}
numeroAleatorio();

function play(){
        
    let res = document.getElementById('res');

    let usuario = document.getElementById('usuario').value;

    let palpite = document.getElementById('palpite');

    if(usuario > 10 || usuario < 1){
        alert('Numero Invalido! Verifique e tente denovo.');
        return;
    }
    else if(usuario > computador){
        palpite.innerHTML = '<p>Quase!!! Tenta um Numero Menor.</p>';
        palpite.style.marginLeft = '34px';
        palpite.style.fontSize = '14px';
        diminuirVida(20);
}

    else if(usuario < computador){

        palpite.innerHTML = '<p>Quase!!! Tenta um numero Maior.<p>';
        palpite.style.marginLeft = '34px';
        palpite.style.fontSize = '14px';
        diminuirVida(20);
}

    else if(usuario == computador){ 
        palpite.style.marginLeft = '8%';
        palpite.innerHTML = '<p>Parabens! Voce Acertou!</p>';
        numeroAleatorio();
        res.innerHTML = (usuario);  
} 
    else{

    }
    
}