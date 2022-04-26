import { userCreate } from "../../src/lib/auth-firebase.js";
import { createUserWithEmailAndPassword } from "../../src/lib/exports.js";

jest.mock("../../src/lib/exports.js");

it("userCreate should create an user with email and password", async () => {
  createUserWithEmailAndPassword.mockResolvedValue({
    user: {},
  });

  const user = await userCreate("teste@teste.com", "123456");

  expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  // verificando se foi chamado com email, verificar se o usuario 'e o que mockou acima
});

it("userCreate should fail creating user and return error code", async () => {
  jest.clearAllMocks();
  createUserWithEmailAndPassword.mockRejectedValue({
    code: "qualquer coisa",
  });
  try {
    await userCreate("teste@teste.com", "123456");
  } catch (error) {
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(error.code).toBe("qualquer coisa");
    // verificar que foi chamado com  usuario e senha
  }
  //
});
