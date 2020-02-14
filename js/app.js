var contador  = 0; 
var punto = false;
var valor ;
var negativo = false;
var signo = ""; 
var numero1 = 0; 
var numero2 = 0; 
var check = false;



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

function asignarSigno( valor){
    numero1 = document.getElementById('display').innerHTML;
    numero1 = parseFloat(numero1);
    check = true;
    borrarDisplay();
    signo = valor; 
}

function ejecutarOperaciones (){
    switch (signo){
        case '+': suma();
                break;
        case '*': multiplicacion();
                break;
        case '-' : resta();
                    break; 
        case '/': division()
            break;
        default : break;
    }
}

function imprimirNumero2 (numero){
    var aux = numero;
    if (aux < 0){
        aux = aux *-1;
    }
    var cont = 0;
     if (aux < 10 ){
        imprimirNumero(numero.toFixed(7));
     }else if (aux >= 10 && aux <100){
         imprimirNumero(numero.toFixed(6));
     }else if (aux >= 100 && aux <1000){
        imprimirNumero(numero.toFixed(5));
    }else if (aux >= 1000 && aux <10000){
        imprimirNumero(numero.toFixed(4));
    }else if (aux >= 10000 && aux <100000){
        imprimirNumero(numero.toFixed(3));
    }else if (aux >= 100000 && aux <1000000){
        imprimirNumero(numero.toFixed(2));
    }else if (aux >= 1000000 && aux <10000000){
        imprimirNumero(numero.toFixed(1));
    }
}

function suma(){
    var resultado = numero1 + numero2;
    borrarDisplay();
    imprimirNumero2(resultado);

}

function multiplicacion(){
    var resultado = numero1 * numero2;
    borrarDisplay();
    imprimirNumero2(resultado);

}

function resta(){
   
        var resultado = numero1 - numero2;
        borrarDisplay();
        imprimirNumero2(resultado);
    
    
}

function division(){
    var resultado = numero1 / numero2;
    borrarDisplay();
    imprimirNumero2(resultado);

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

document.getElementById('mas').addEventListener("click",function(){
    asignarSigno('+');

});

document.getElementById('por').addEventListener("click", function(){
    asignarSigno('*');
});

document.getElementById('menos').addEventListener("click", function(){
    asignarSigno('-');
});

document.getElementById('dividido').addEventListener("click", function(){
    asignarSigno('/');
});

document.getElementById('igual').addEventListener("click",function(){
    numero2 = document.getElementById('display').innerHTML; 
    numero2= parseFloat(numero2); 
    ejecutarOperaciones();

});
