function falhar(mensagem: string): never {
  throw new Error(mensagem);
}

function validarIdade(entrada: unknown): number {
  if (typeof entrada !== "number") {
    falhar("Entrada não é um number.");
  }
  if (Number.isNaN(entrada) || entrada < 0 || entrada > 120) {
    falhar("Entrada é um NaN, menor que 0 ou maior que 120.");
  }

  return Math.round(entrada);
}

const entradaUser = 130;
console.log(validarIdade(entradaUser));
console.log(validarIdade("entradaUser"));
