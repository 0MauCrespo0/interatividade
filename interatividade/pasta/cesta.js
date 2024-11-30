let produto1 = document.getElementById('itm1')
let quantidade1 = document.getElementById('qtd1')
let preco1 = document.getElementById('preco1')
let total1 = document.getElementById('tot1')

let produto2 = document.getElementById('itm2')
let quantidade2 = document.getElementById('qtd2')
let preco2 = document.getElementById('preco2')
let total2 = document.getElementById('tot2')

let valorTotal = document.getElementById('valorFinal')
function calculartotal1(){
    let qtd = parseFloat(quantidade1.value) || 0
    let preco = parseFloat(preco1.value) || 0
    total1.textContent = (qtd * preco).toFixed(2) //toFixed() determina a qtd de casas decimais que desejo representar no n°
    atualizarValorFinal();
}

function calculartotal2(){
    let qtd = parseFloat(quantidade2.value) || 0
    let preco = parseFloat(preco2.value) || 0
    total2.textContent = (qtd * preco).toFixed(2) //toFixed() determina a qtd de casas decimais que desejo representar no n°
    atualizarValorFinal();
}

function atualizarValorFinal(){
    let valor1 = parseFloat(total1.textContent) || 0
    let valor2 = parseFloat(total2.textContent) || 0
    valorTotal.textContent = (valor1 + valor2).toFixed(2)
    

}

quantidade1.addEventListener('input',calculartotal1)
preco1.addEventListener('input',calculartotal1)

quantidade2.addEventListener('input',calculartotal2)
preco2.addEventListener('input',calculartotal2)

