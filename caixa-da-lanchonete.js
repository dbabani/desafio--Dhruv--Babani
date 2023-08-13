// Definição do cardápio
const cardapio = {
    'cafe': { descricao: 'Café', valor: 3.00 },
    'chantily': { descricao: 'Chantily (extra do Café)', valor: 1.50 },
    'suco': { descricao: 'Suco Natural', valor: 6.20 },
    'sanduiche': { descricao: 'Sanduíche', valor: 6.50 },
    'queijo': { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
    'salgado': { descricao: 'Salgado', valor: 7.25 },
    'combo1': { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
    'combo2': { descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
  };
  
  // Definição das formas de pagamento
  const formasPagamento = ['dinheiro', 'debito', 'credito'];
  
  // Função para calcular o valor total da compra
  function calcularTotal(pedido, formaPagamento) {
    let total = 0;
  
    // Verificar se a forma de pagamento é válida
    if (!formasPagamento.includes(formaPagamento)) {
      return "Forma de pagamento inválida!";
    }
  
    // Processar os itens do pedido
    for (const ItemCodigo in pedido) {
      if (pedido.hasOwnProperty(ItemCodigo)) {
        // Verificar se o código do item é válido
        if (!cardapio[ItemCodigo]) {
          return "Item inválido!";
        }
  
        // Verificar se é um item extra sem item principal correspondente
        if (ItemCodigo.includes('_extra') && !pedido[ItemCodigo.replace('_extra', '')]) {
          return "Item extra não pode ser pedido sem o principal";
        }

        if(quantidade === 0){
          return "Quantidade invalida"
        }
        if(cardapio[pedido] === ''){
          return "Não há itens no carrinho de compra!"
        }

  
        // Calcular o valor do item
        const itemValor = cardapio[ItemCodigo].valor;
        const quantidade = pedido[ItemCodigo];
        total += itemValor * quantidade;
      }
    }
  
    // Aplicar desconto ou taxa conforme a forma de pagamento
    if (formaPagamento === 'dinheiro') {
      total *= 0.95; // Aplicar 5% de desconto
    } else if (formaPagamento === 'credito') {
      total *= 1.03; // Aplicar acréscimo de 3%
    }else if(formaPagamento === 'debito'){
      total *= 1.00; // retorna o valor recebido com nenhuma Alteração
    }
  
    return total;
    
  }
  
  
  