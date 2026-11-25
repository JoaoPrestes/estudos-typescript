const notas: number[] = [10, 6, 0, 2];
let somaNotas: number = 0;

for (let i = 0; i < notas.length; i++) {
  const notaAtual = notas[i];

  if (notaAtual !== undefined) {
    somaNotas += notaAtual;
  }
}

const mediaNotas: number = somaNotas / notas.length;
//notas.push("8");

if (mediaNotas >= 7) {
  const status: boolean = true;
  console.log(`O status de aprovação do aluno é:......${status}`);
} else if (mediaNotas < 7) {
  const status: boolean = false;
  console.log(`O status de aprovação do aluno é:..... ${status}`);
  console.log("O aluno está em recuperação.");
}
