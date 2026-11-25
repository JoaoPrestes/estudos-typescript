type StatusPedido = "pago" | "pendente" | "cancelado";

const listaPedidos: readonly StatusPedido[] = [
  "pago",
  "pendente",
  "pago",
  "cancelado",
  "pago",
  "pago",
];

let pedidosPagosPendentes = 0;

for (const statusPedido of listaPedidos) {
  if (statusPedido === "pago") {
    pedidosPagosPendentes++;
  }
}

console.log(`Pedidos que estão aguardando na fila: ${pedidosPagosPendentes}`);

const LIMITE_POR_LOTE = 2;
let processadosNoLote = 0;

while (pedidosPagosPendentes > 0 && processadosNoLote < LIMITE_POR_LOTE) {
  console.log("Processando pedido...");

  pedidosPagosPendentes--;
  processadosNoLote++;
}

console.log(
  `Lote finalizado. Foram processados ${processadosNoLote} pedidos e restam ${pedidosPagosPendentes} para serem processados ainda. `,
);
