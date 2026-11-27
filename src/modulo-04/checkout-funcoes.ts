interface ItemCompra {
  nome: string;
  preco: number;
}

function somarItens(...itens: ItemCompra[]): number {
  let valorTotal = 0;
  for (const item of itens) {
    const { preco } = item; //preco recebe o valor de item a cada loop
    valorTotal += preco;
  }

  return valorTotal;
}

function aplicarDesconto(valor: number, descontoPercentual = 0): number {
  if (descontoPercentual < 0 && descontoPercentual > 100) {
    throw new Error();
  } else {
    const precoFinal = valor * (1 - descontoPercentual / 100);
    return precoFinal;
  }
}

function exibirResumo(cliente: string, total: number, cumpom?: string): void {
  if (cumpom?.trim) {
    console.log(`nome do cliente: ${cliente}\n
            valor total: ${total}`);
  } else {
    console.log(`nome do cliente: ${cliente}\n
            valor total: ${total}\n
            cumpom: ${cumpom}`);
  }
}

console.log(
  somarItens({ nome: "bola", preco: 10 }, { nome: "copo", preco: 10 }),
);

aplicarDesconto();
