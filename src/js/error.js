export function errorMessages(errorCode) {
  let errorMessage = "";
  switch (errorCode) {
    case "auth/user-not-found":
      errorMessage = "usuário não encontrado";
      break;
    case "auth/wrong-password":
      errorMessage = "senha incorreta";
      break;
    default:
      errorMessage = "ocorreu um erro, tente novamente";
  }
  return errorMessage;
}
