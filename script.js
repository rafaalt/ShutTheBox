
var valorAtual = 0;
var pontuacao = 0;
var dado1 = document.getElementById("dado1");
var dado2 = document.getElementById("dado2");
var boxes = document.getElementsByClassName("number");
var txtRest = document.getElementById("txtRest");
var txtInfo = document.getElementById("info");
for(let i = 0; i<9 ; i++){
    boxes[i].setAttribute("value", i+1);
    boxes[i].addEventListener('click', () => {
        abaixarNum(i+1);
    })
}

function abaixarNum(num){
    if(pontuacao == 9){
        vencer();
    }
    else{
        //var mudar = document.getElementById("mudar")
        var numAtual = document.getElementsByClassName("number")[num-1];
        var value = numAtual.getAttribute("value");
        if(value == 0){ }
        else if(value > valorAtual){
            alert("Valor Restante Invalido");
        }
        else{
        pontuacao++;
        numAtual.setAttribute("value", 0);
        numAtual.innerHTML = "X";
        valorAtual -= value;
        txtRest.innerText = `Restante: ${valorAtual}`;
        numAtual.style.background = "#F77";
        }
    }
}

function rodardados(){
    if(valorAtual != 0){
        alert("Por favor, termine os valores restantes");
    }
    else{
    var a1 = Math.floor(Math.random() * (7 - 1) + 1);
    var a2 = Math.floor(Math.random() * (7 - 1) + 1);
    valorAtual = a1 + a2;
    txtInfo.innerHTML = `Voce girou ${a1} + ${a2} = ${valorAtual}`
    dado1.setAttribute("src",`dado${a1}.png`);
    dado2.setAttribute("src",`dado${a2}.png`);
    txtRest.innerText = `Restante: ${valorAtual}`;
    }
}

function desistir(){
    valorAtual = 0;
    pontuacao = 0;
    dado1.setAttribute("src",`dado0.png`);
    dado2.setAttribute("src",`dado0.png`);
    txtRest.innerText = "Inicie o jogo.";
    txtInfo.innerHTML = `Rode os dados`
    for(let i = 0; i<9 ; i++){
        boxes[i].setAttribute("value", i+1);
        boxes[i].innerText = `${i+1}`;
        boxes[i].style.background = "rgb(90, 58, 27)";
    }
}

function vencer(){
    alert("Parabens!! Voce venceu!");
    desistir();
}