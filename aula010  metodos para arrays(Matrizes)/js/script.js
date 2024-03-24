const pessoa = ["Adriano", "Oliveira", 30, "Aluno"];

pessoa.pop(); // Remove o ultimo iten da lista
pessoa.push('qualquer coisa'); //Adiciona mais um item no final da lista
pessoa.shift(); //Remove o primeiro item da lista
pessoa.unshift('Silva'); //Adiciona mais um item no começo da lista
pessoa.splice(1,0,"Item adicionado 1", "Item adicionado 2")// o primeiro valor significa a posição do item Ex: pessoa[1], o segundo valor significa quantos itens quer que exclua (0), e em seguida oque vai ser adicionado a seguir na posição [1]

window.document.getElementById('texto').innerHTML = pessoa.join(" * ");
//-----------------------------------------------------------------------



const lista1 = ["Arroz", "feijão", "leite", "macarrão"];
const lista2 = ["suco", "refrigerante", "carne"];
const lista3 = ["salgado", "doce"];

//3 MODOS DE CONCATENAR ARRAYS(MATRIZES)
//const superLista = lista1.concat(lista2,lista3);
//const superLista = lista1 +","+ lista2 + "," + lista3;          
const superLista = `${lista1},${lista2},${lista3}`;

window.document.getElementById('texto-2').innerHTML = superLista;
//------------------------------------------------------------------------




const jogadores = ["Neymar", "Ronaldo", "Ronaldinho","CR7", "Messi", "João", "Cadu"];

const craques = jogadores.slice(2,5);
window.document.getElementById('texto-3').innerHTML = craques;

const jogOrdem = jogadores.sort(); //coloca os itens em ordem alfabética
console.log(jogOrdem)

const jogOrdemReverse = jogadores.reverse() //coloca os intens em ordem alfabética reversa
console.log(jogOrdemReverse)
//------------------------------------------------------------------------




const numeros = [40, 100, 50, 20, 2, 7];

numeros.sort(function(a,b){return a-b}) //Hack para colcar numeros em ordem alfabéticas
window.document.getElementById('texto-4').innerHTML = numeros;

//
function maiorNumero (array) {
    return Math.max.apply(null,array);  //mostra qual e o maior número da Matriz
}
console.log(maiorNumero(numeros));


//
function menorNumero (array) {
    return Math.min.apply(null,array); //mostra qual e o menor número da Matriz
}
console.log(menorNumero(numeros));


//
const maior20 = numeros.filter(filtragem);

function filtragem(value) {
    return value > 20;
}

console.log(maior20);
