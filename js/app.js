var contador  = 0; 
var punto = false;
var valor ;
var negativo = false;
function imprimirNumero(numero){
    
   
    if (contador <8 && !(contador == 0 && numero == 0) && ((numero == '.' && punto == false) || (numero != '.'))){
        if (contador == 0 && numero !='.'){
                document.getElementById('display').innerHTML = numero; 
                
                
        }else{
            if (numero == '.'){
                punto =true
            }
            document.getElementById('display').innerHTML += numero; 
        }
        contador ++;
    }else if(contador >=8) {
        alert("Solo 8 digitos por favor");
    }
}

function borrarDisplay(){
    document.getElementById('display').innerHTML = 0; 
    punto = false;
    contador = 0;
}

function Negativo(){
    if (negativo == false){
        valor = document.getElementById('display').innerHTML; 
        document.getElementById('display').innerHTML = "-"; 
        document.getElementById('display').innerHTML += valor;
        negativo = true;
    }else {
        valor = document.getElementById('display').innerHTML * -1;
        document.getElementById('display').innerHTML = valor;
        negativo = false;
    }
}

document.getElementById('1').addEventListener("click", function(){
    imprimirNumero(1);
});
document.getElementById('0').addEventListener("click", function(){
    imprimirNumero(0);
});
document.getElementById('2').addEventListener("click", function(){
    imprimirNumero(2);
});
document.getElementById('3').addEventListener("click", function(){
    imprimirNumero(3);
});
document.getElementById('4').addEventListener("click", function(){
    imprimirNumero(4);
});
document.getElementById('5').addEventListener("click", function(){
    imprimirNumero(5);
});
document.getElementById('6').addEventListener("click", function(){
    imprimirNumero(6);
});
document.getElementById('7').addEventListener("click", function(){
    imprimirNumero(7);
});
document.getElementById('8').addEventListener("click", function(){
    imprimirNumero(8);
});
document.getElementById('9').addEventListener("click", function(){
    imprimirNumero(9);
});

document.getElementById('on').addEventListener("click", function(){
    borrarDisplay();
});

document.getElementById('punto').addEventListener("click", function(){
    imprimirNumero('.');
});

document.getElementById('sign').addEventListener("click", function(){
    Negativo();
});
