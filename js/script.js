

var listaNomi = ["Rossi" , "Ferrari", "Bianchi" , "Donadoni"];
var btnInviaNome = document.getElementById('invia-nome');
// AL CLICK
btnInviaNome.addEventListener( "click", function() {
// CANCELLO CONTENUTO PRECEdENTE
    document.getElementById('lista-completa').innerHTML = "";
//PRENDO VALORE
var nomeInserito = document.getElementById('cognome').value;
// AGGIUNGO NOME
listaNomi.push(nomeInserito);
// ORDINO ALFABETICAMENTE
listaNomi = listaNomi.sort();
// STAMPO LISTA
for (var i = 0; i < listaNomi.length; i++) {
  document.getElementById('lista-completa').innerHTML += "<li>" + listaNomi[i] + "</li>";
}

//CONTROLLO LA POSIZIONE DEL NOME IN LISTA
var posizioneLista = 1;
for (var i = 0; i < listaNomi.length && listaNomi[i] != nomeInserito; i++) {
  posizioneLista++;
}
// OUTPUT POSIZIONE

document.getElementById('posizione-lista').innerHTML = posizioneLista;
});
