//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

function combinandoNomesPokemons (palavra){
  
    let palavraPokemon = palavra + "saur";
    
    return palavraPokemon
  }
  
  // Entrada da palavra usando o gets():
  var nomeEntrada = gets();
  
  // Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
  var palavraGerada = combinandoNomesPokemons(nomeEntrada);
  
  // Exibindo a palavra gerada:
  print(palavraGerada);