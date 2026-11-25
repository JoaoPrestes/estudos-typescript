function somar(a: number, b: number): number {
  return a + b;
}

const n1 = 10;
const n2 = 5;

const total = somar(n1, n2);
console.log(total);

//////// - ///////

const par: readonly [string, number] = ["Teclado", 250];
const [item, valor] = par;
console.log(item + ' - custa: R$ ' + valor);

