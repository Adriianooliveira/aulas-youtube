/* EVENTOS

Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.


Existem muitos eventos. Veja os mais utilizados:

onclick  -> Disparado quando recebe um click.

ondblclick -> Disparado quando recebe clique duplo.

onmouseover -> Disparado quando o mouse está sobre.

onmouseout -> Disparado quando o mouse é movido para fora do elemento.

onmousemove -> Disparado quando o mouse é movido no elemento.

onmousedown -> Disparado quando o clique do botão foi pressionado.

onmouseup -> Disparado quando o clique do botão é liberado.

onfocus -> Disparado quando o elemento recebe o foco. Válido para input

onchange -> Disparado quando existe uma mundança no conteudo. "Ao mudar".

onblur -> Disparado quando o elemento perde o foco.

onkeydown -> Disparado quando uma tecla é pressionada.

onkeypress -> Disparado quando uma tecla é pressionada e solta.

onkeyup -> Disparada quando uma tecla é solta sobre um elemento.

onload -> Disparado quando a página terminou de ser carregada. Body.

onresize -> Disparado quando há um redimencionamento da janela.

*/




// function eventoClick() {
//     alert("adicionou um evento de click");
//     document.body.style.backgroundColor = 'yellow';
// }


//  function eventoDblclick() {
//      alert("adicionou um evento de double click")
//      document.body.style.backgroundColor = 'blue'
//  }



function viraVermelho() {
    let div = window.document.getElementById('box');
    div.style.backgroundColor = 'yellow';

}


function viraGreen(){
    let div = window.document.getElementById('box');
    div.style.backgroundColor = 'green';
}

// function adicionaTexto() {
//     let p = window.document.getElementById('texto');
//     p.append('O mouse moveu<br>');
// }

function viraBlack() {
    let div = window.document.getElementById('box');
    div.style.backgroundColor = 'black';
}


function viraRed() {
    let div = window.document.getElementById('box');
    div.style.backgroundColor = 'red';
}







function quandoFocado() {
    let input = window.document.getElementById('text');
    input.value = "Está Focado";
}