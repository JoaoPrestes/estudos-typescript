interface Produto {
  readonly id: string;
  nome: string;
  precoEmCentavos: number;
  descricao?: string;
  tags: string[];
}

function formatarProduto(produto: Produto): string {
  const valor = produto.precoEmCentavos;
  const total = valor / 100;
  const totalFormatado = total.toFixed(2);

  if (produto.descricao?.trim) {
    return (
      produto.id +
      " " +
      produto.nome +
      " - R$ " +
      totalFormatado +
      " " +
      "(" +
      produto.descricao +
      ")"
    );
  } else {
    return produto.id + " " + produto.nome + " - R$ " + totalFormatado;
  }
}

const teclado: Produto = {
  id: "produto-01",
  nome: "teclado",
  precoEmCentavos: 20,
  tags: ["tecnologia", "informatica"],
};
const monitor: Produto = {
  id: "produto-02",
  nome: "monitor",
  precoEmCentavos: 57,
  descricao: "Monitor novo e de alta resolucao",
  tags: ["tecnologia", "informatica", "GPU"],
};

//teclado.id = "produto-100"  // DA UM ERRO

console.log(formatarProduto(teclado));
console.log(formatarProduto(monitor));
