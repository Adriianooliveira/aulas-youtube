/* if e else */

var hora = new Date() .getHours();

if (hora < 12) {
    alert('bom dia');
} else if ( hora < 18) {
    alert('boa tarde');
} else {
    alert('boa noite');
}


function verificar() {
    let nome = document.getElementById('nome').value;

    if (nome == "" || nome == null) {
        let p = window.document.getElementById('texto');
        p.innerHTML = ' O campo não pode ser vazio';
        p.style.color = 'red';
    } else {
        let p = window.document.getElementById('texto');
        p.innerHTML = 'Parabéns tudo certo';
        p.style.color = 'green';
    }
}