const sistema = "Checkout-API";
let versao = 2;
let descontoAplicado: number | null;
let codigoRastreio: string | undefined;

function exibirVersao(nomeSistema: string, numVersao: number) : void {
  console.log(nomeSistema + " v" + numVersao);
}

exibirVersao(sistema, versao);