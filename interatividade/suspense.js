const botaoJs = document.getElementById('botaoHtml');
let gato = document.getElementById('gatinho');
function alternarImagem(){
    if(botaoJs.textContent == 'carinho'){
        gato.src= 'creepy-cat.mp4';

        botaoJs.textContent = 'fugir';

    }

    else{
        gato.src='gato branco.jpg';
        botaoJs.textContent = 'carinho';

    }
    
}
botaoJs.addEventListener('click',alternarImagem);