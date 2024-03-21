/* Vamos entender Variáveis
Variáveis são "recepientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualuqer tipo dev valor.

No javascript temos 3 palavras-chaves para declarar variáveis:

-->var 

-->let

-->const
*/


                        /* VARIAÇÃO (VAR) */

//Declaração de variaveis
var a,b,c;
var nome, sobrenome,nomeCompleto

//Atribuição dos valores
a = 2;
b = 5;
c = a + b;
console.log(c);



nome = 'Adriano';
sobrenome = 'oliveira';
nomeCompleto = nome +" "+ sobrenome;
console.log(nomeCompleto);



//NA VARIAVEL (VAR) PODEMOS REATRIBUIR VALORES
var d = 2;
var d = 5;



var x = 10; //aqui é 10

{
    var x = 2; //aqui é 2
}

console.log(x) //aqui tambem vai ser 2








                        /* VARIAÇÃO (LET) */
let pessoa = 'Adriano';
//let pessoa = 'João';  // DIFERENTE DO VAR NO (LET) NÃO PODEMOS REATRIBUIR VALORES


let z = 10; //aqui é 10

{
    let z = 5; //aqui é 5
}

console.log(z) //diferente do var aqui vai ser 10, só seria 5 se estivesse dentro no bloco







                        /*VARIÁVEL (CONST) */

// NAO PODEMOS REATRIBUIR VALORES NO (CONST) IGUAL ACONTECE NO LET


const w = 10; //aqui vai ser 10

{
    const w = 5; // não importa se estiver dentro do bloco o (const) vai continuar valendo 10 que foi o primeiro valor 
}

//(CONST) e LET são parecidos mas no (CONST) nao importa se esta dentro do bloco porque ele vai continuar recebendo seu primeiro valor que foi atribuido sendo ele mais restrito que todos 


