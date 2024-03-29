/* MANIPULAR DATAS NO JAVASCRIPT */




//COMANDO BASE PARA PEGAR A DATA
let data = new Date();
//console.log(data);
//-------------------------------



//PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
//console.log(ano);
//--------------------------------


//PEGAR O MÊS ATUAL -  DE 0 ATÉ 11, SENDO 0 JANEIRO  E 11 DEZEMBRO
let mes = data.getMonth();
console.log(mes);

const mesesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

let mesEscrito = mesesDoAno[mes];
console.log(mesEscrito);
//--------------------------------------------------------------------------------------



//PEGAR DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes)
//-----------------------------



//PEGAR O DIA DA SEMANA - 0 ATÉ 6
let diaSemana = data.getDay()

//PRIMEIRO MÉTODO
// switch (diaSemana) {
//     case 0:
//         console.log("domingo");
//         break
//     case 1:
//         console.log("segunda-feira");
//         break
//     case 2:
//         console.log("terça-feira");
//         break
//     case 3: 
//         console.log("quarta-feira");
//         break
//     case 4:
//         console.log("quinta-feira");
//         break
//     case 5:
//         console.log("sexta-feira");
//         break
//     case 6:
//         console.log("sábado");
//         break
//     default:
// }


//SEGUNDO METODO
let diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
let diasDaSemanaEscrito = diasDaSemana[diaSemana];
console.log(diasDaSemanaEscrito);
//------------------------------------------------------------------------------



//PEGAR A HORA - DE 0 ATÉ 23

let hora = data.getHours();
console.log(hora);
//--------------------------



// PEGAR OS MINUTOS - DE 0 ATÉ 59

let minutos = data.getMinutes();
console.log(minutos);
//-------------------------------


//PEGAR OS SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);
//---------------------------------



//PEGAR MILISEGUNDOS - DE 0 ATÉ 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);
//-----------------------------------------



//PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MÊS / ANO
let dataBR = data.toLocaleString('pt-BR',{dateStyle: 'short'});
console.log(dataBR);



//OUTRA FORMA DE PADRÃO BRASILEIRO
const d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {
    return x < 10 ? "0" + x : "" + x;  // (?) significa se,  (:) significa senao
};

console.log(`${addZero(diaMes)}/${addZero(mes)}/${addZero(ano)}`);
//--------------------------------------------------------------------------------




//COMOPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS

var hoje = new Date();
var vencimento = new Date(2024, 1, 15);

if (hoje > vencimento) {
    console.log('Sua conta esta vencida');
} else {
    console.log('Ainda não venceu, Tudo certo');
}
//------------------------------------------------------



//DIFERENÇA ENTRE DUAS DATAS EM DIAS
const dataInicial = new Date();
const dataFinal = new Date(2024,11,31)

const diferencaTempo =  dataFinal.getTime() - dataInicial.getTime()

const diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias + " dias");
