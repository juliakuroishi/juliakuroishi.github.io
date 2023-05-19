//alert("Porfólio ainda em construção :)");

function functionQuemSouEu() {
    var quemsou = document.getElementById("quemsoueu");
    var habilidades = document.getElementById("habilidades");
    var contato = document.getElementById("meucontato");

    contato.hidden = true;
    quemsou.hidden = false; //o que vai aparecer somente
    habilidades.hidden = true;
}

function functionHabilidades() {
    var quemsou = document.getElementById("quemsoueu");
    var habilidades = document.getElementById("habilidades");
    var contato = document.getElementById("meucontato");

    contato.hidden = true;
    quemsou.hidden = true;
    habilidades.hidden = false; //o que vai aparecer somente
}

function functionMeuContato() {
    var quemsou = document.getElementById("quemsoueu");
    var habilidades = document.getElementById("habilidades");
    var contato = document.getElementById("meucontato");

    contato.hidden = false; //o que vai aparecer somente
    quemsou.hidden = true;
    habilidades.hidden = true;
}