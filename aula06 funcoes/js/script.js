/* FUNÇÕES

Uma função javascript é um bloco de códigos projetados para executar uma tarefa especifica.

É como uma pequena "Fábrica" onde você faz uma entrada e ela te dá uma saida.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vao contribuir para todo código.

Uma função javascript é executada quando "algo" a invoca (chama-a).
 */


function soma(valor1, valor2) {
    return valor1 + valor2;
}

let total = soma(10,50);

window.document.getElementById('texto').innerHTML = total;








function realParaDolar(real,cotacaoDolar) {
    return real * cotacaoDolar;
}

let real = 10;
let cotacao = 4.95;

console.log("o valor em real é R$" + real + ", o valor em dólar é U$" + realParaDolar(real,cotacao) + ".");







function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit-32);
}

let x = paraCelsius(77);


console.log("A temperatura é de " +x+ " Graus celsius");