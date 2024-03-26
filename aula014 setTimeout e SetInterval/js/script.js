/* EVENTOS DE TEMPOS COM JAVASCRIPT

Os eventos de tempo permintem a execução do código em intervalos de tempo
especificos. Esses intervalos de tempo são chamados  de eventos de cronometragem.

Os dois métodos-chave para usar com javascript são:

setTimeout(function, tempo em milisegundos)
-> executa uma função, depois de esperar um número especificado de milisegundos.

setInterval(function, milisegundos)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.

*/




function ativarContagem() {
    //window.document.getElementById('tempo').innerHTML = `Começou a contar!`;

    //EXECUTA APENAS UMA VEZ APÓS O TEMPO DETERMINADO
    //tempo = setTimeout(function(){
    //    window.document.getElementById('tempo').innerHTML = `Executou o setTimeout`;
    //}, 5000);



    tempo = setInterval(function(){
        var cronometro = window.document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma === 0) {
            paraContagem()
            window.document.getElementById('tempo').innerHTML = `Tempo esgotado`;
        } else {
            window.document.getElementById('tempo').innerHTML = soma;
        }
        
    },1000);
}


function paraContagem() {
    //clearTimeout(tempo);
    //window.document.getElementById('tempo').innerHTML = `Parou a contagem`


    clearInterval(tempo);

    
}