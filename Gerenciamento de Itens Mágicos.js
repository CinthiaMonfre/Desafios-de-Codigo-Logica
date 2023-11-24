//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
  
    constructor(tipoItem, dano, resistencia) {
      this.tipoItem = tipoItem;
      this.dano = dano;
      this.resistencia = resistencia;
  
    }
  
    calcularDano() {
      return this.tipoItem === 'arma' ? this.dano * 2 : this.dano;
    }
  }
  
  // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
  const tipoItem = gets();
  const dano = parseInt(gets());
  const resistencia = parseInt(gets());
  
  const itemPersonalizado = new ItemMagico(tipoItem, dano, resistencia);
  
  print("Tipo: " + itemPersonalizado.tipoItem);
  print("Dano: " + itemPersonalizado.dano);
  print("Resistencia: " + itemPersonalizado.resistencia);
  
  // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
  const danoTotal = itemPersonalizado.calcularDano();
  print("Dano em combate: " + danoTotal);