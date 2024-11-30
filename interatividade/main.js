//criando variaveis
//criamos uma 
const botaoJs = document.getElementById('botaoHtml');
let lampada = document.getElementById('lampada');
let statusTexto = document.getElementById('status');
//criando uma função (bloco de codigo com função especifica)
function alternarPisca (){
    
    //Substituindo a imagem do elemento lampada atribuindo o src. Porque atribuimos o src?Lembre-se quando criamos uma imagem no html para atribuir uma imagem ao comando img temos de colocar o src='caminho/nomeImagem'. Assim abaixo trocamos a imagem atribuindo um novo src ao nosso elemento lampada do html
    if (botaoJs.textContent == 'Ligar') {
        lampada.src ='ligado.png';
        //Abaixo a partir do metodo textContent atribuimos um novo texto para aparecer no nosso elemento
        botaoJs.textContent = 'Desligar';
        statusTexto.textContent = 'aceso';
        //Abaixo a partir do método style para modificar o design do elemento statusTexto que em nosso html é o nosso elemento id="status".Neste caso trocamos a cor, podemos acessar todas as funçoes do style se após a palavra style colocarmos o .(ponto')
        statusTexto.style.color = 'Orange';
        //TROCAR COR
        statusTexto.style.color = '30px' ;
    } else {
        lampada.src = 'apagado.png';
        botaoJs.textContent =  'Ligar';
        statusTexto.textContent= 'apagado';
        statusTexto.style.fontSize = '25px';
        statusTexto.style.color = 'rgb(126,125,125)'
    }
}
//adicionar evento ao botão toda vez que o funcionario der um clique
botaoJs.addEventListener('click',alternarPisca) 

