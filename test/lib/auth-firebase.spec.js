import { userCreate } from "../../src/lib/auth-firebase.js";
import * as exportsTest from "../../src/lib/exports.js";

jest.mock("../../src/lib/exports.js");

it("userCreate should create an user with email and password", async () => {
  exportsTest.createUserWithEmailAndPassword.mockResolvedValue({
    user: {
      // userEmail: "teste@teste.com",
      // password: "123456",
    },
  });

  const user = await userCreate("teste@teste.com", "123456");
  console.log(user);

  expect(exportsTest.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  // verificando se foi chamado com email, verificar se o usuario é o que mockou acima
  expect(exportsTest.createUserWithEmailAndPassword).toHaveBeenCalledWith("teste@teste.com", "123456");
});

it("userCreate should fail creating user and return error code", async () => {
  jest.clearAllMocks();
  exportsTest.createUserWithEmailAndPassword.mockRejectedValue({
    code: "qualquer coisa",
  });
  try {
    await userCreate("teste@teste.com", "123456");
  } catch (error) {
    expect(exportsTest.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(error.code).toBe("qualquer coisa");
    // verificar que foi chamado com  usuario e senha
  }
  //
});
