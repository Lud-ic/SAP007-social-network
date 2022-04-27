import { userCreate } from "../../src/lib/auth-firebase.js";
import * as exportsTest from "../../src/lib/exports.js";

jest.mock("../../src/lib/exports.js");

it("userCreate should create an user with email and password", async () => {
  const email = "teste@teste.com";
  const password = "123456";
  const auth = undefined;
  const mockUser = {
    user: {
      email,
    },
  };

  exportsTest.createUserWithEmailAndPassword.mockResolvedValue(mockUser);

  const user = await userCreate(email, password);

  expect(exportsTest.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  expect(exportsTest.createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  expect(user).toEqual(mockUser.user);
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
