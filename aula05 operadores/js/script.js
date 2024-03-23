/* VAMOS ENTENDER OPERADORES:
--> Os operadores javascript são usados para atribuir valores, comprar valores,
executar operações aritméticos e muito mais.


São os sinais que usamos: +  -  *  /  =  ++  --  -=  &&  ||  etc...


São seperados em 6 "categorias":

1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de comparação
5) Operador condicional (Ternário)
6) Operadores Lógicos


 */



/*Operadores de Atribuição

var valor1, valor2, total;

valor1 = 5;
valor2 = 2;

valor1 += valor2;
alert(valor1)

*/




/*Operadores de sequencia (concatenação)
var valor1, valor2, total;

valor1 = 'Adriano ';
valor2 = 'Oliveira';

total = valor1 + valor2;
alert(total);
*/





//Operadores de comparação

var valor1, valor2, total;

valor1 = 8;
valor2 = 10;

total = (valor1 == valor2); //true (verdadeiro) ou false (falso)
alert(total);

//total = (valor1 === valor2); 
//total = (valor1 != valor2);
//total = (valor1 !== valor2);
//total = (valor1 > valor2) ou <  >=  <=





//Operadores ternários

var idade, eleitor;

idade = 18;
eleitor = (idade < 18) ? "Não eleitor" :"sim eleitor";

alert(eleitor);






//Operadores logicos

var number1, number2, resultado1, resultado2, resultado3;

number1 = 10;
number2 = 4;
resultado1 = (number2 > 60 && number2 < 80);
resultado2 = (number2 > 20 || number2 < 5);
resultado3 = !(number2 === 20); // (!)simbolo de negação
alert(resultado1);
alert(resultado2);