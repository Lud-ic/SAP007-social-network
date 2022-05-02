export function errorMessages(errorCode) {
  let errorMessage = "";
  switch (errorCode) {
    case "auth/user-not-found":
      errorMessage = "usuário não encontrado";
      break;
    case "auth/wrong-password":
      errorMessage = "email ou senha incorreta";
      break;
    case "auth/email-already-in-use":
      errorMessage = "usuário já cadastrado";
      break;
    case "auth/invalid-email":
      errorMessage = "email inválido";
      break;
    default:
      errorMessage = "ocorreu um erro, tente novamente";
  }
  return errorMessage;
}
