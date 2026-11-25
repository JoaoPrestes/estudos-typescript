type Canal = "email" | "sms" | "push";

interface Notificacao {
  canal: Canal;
  destinario?: string;
  mensagem?: string;
}

function enviarNotificacao(notific: Notificacao): string {
  switch (notific.canal) {
    case "email":
      return "Iremos notificar via E-mail";
    case "sms":
      return "Iremos notificar via sms";
    case "push":
      return "Iremos notificar via push";
    default:
      const _exaustivo: never = notific.canal;
      throw new Error(_exaustivo);
  }
}

console.log(
  enviarNotificacao({
    canal: "sms",
    destinario: "joao otavio",
    mensagem: "Tudo certo!",
  }),
);
