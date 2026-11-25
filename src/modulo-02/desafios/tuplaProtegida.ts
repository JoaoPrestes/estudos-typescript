type Coordenada = readonly [latitude: number, longitude: number];

enum StatusEntrega {
  preparando = "PREPARANDO",
  emRota = "EM ROTA",
  entregue = "ENTREGUE",
}

function resumirEntrega(destino: Coordenada, status: StatusEntrega): string {
  return (
    "A cordenada é " + destino[0] + ", " + destino[1] + " e o status: " + status
  );
}

const ponto: Coordenada = [-18.1, -67.0];
console.log(resumirEntrega(ponto, StatusEntrega.emRota));
