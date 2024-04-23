function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("complete a expressão: filho de peixe?");

    
    if (respostaTime.toLowerCase() === "peixinho é") {
      alert("Isso aí! A expressão completa é filho de peixe peixinho é");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}