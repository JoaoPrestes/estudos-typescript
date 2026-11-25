let n1 = 5;
let n2 = 15;

function calculoSoma(n1: number, n2: number) {
  return n1 + n2;
}

function calculoMultiplicacao(n1: number, n2: number) {
  return n1 * n2;
}

function calculoOperacoes(n1: number, n2: number) {
  const totalSoma = calculoSoma(n1, n2);
  const totalMultiplicacao = calculoMultiplicacao(n1, n2);
  return totalSoma + totalMultiplicacao;
}

console.log(calculoSoma(n1, n2));
console.log(calculoMultiplicacao(n1, n2));
console.log(calculoOperacoes(n1, n2));
