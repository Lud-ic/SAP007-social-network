/**
 * @jest-environment jsdom
*/

// import {
//   userCreate,
//   userLogin,
//   userLogout,
//   signinGoogle,
// } from "../../src/lib/auth-firebase.js";

import * as exportsTest from "../../src/lib/exports.js";
import register from "../../src/js/pages/register.js";
// import signin from "../../src/js/pages/signin.js";

jest.mock("../../src/lib/exports.js");
// jest.mock("../../src/firebase.js");

describe("register", () => {
  beforeEach(() => exportsTest.createUserWithEmailAndPassword.mockClear());
  it("an error should occur if the passwords do not match", () => {
    const pageRegister = register();
    const email = pageRegister.querySelector("#email");
    const password = pageRegister.querySelector("#password");
    const confirmPassword = pageRegister.querySelector("#confirm-password");
    email.value = "teste@teste.com";
    password.value = "123456";
    confirmPassword.value = "1234567";
    pageRegister.dispatchEvent(new Event("submit"));
    const errorFound = pageRegister.querySelector("#error");
    expect(errorFound.innerHTML).toEqual("senhas incompatíveis");
    expect(exportsTest.createUserWithEmailAndPassword).not.toHaveBeenCalled();
  });
});

describe("userCreate", () => {
  it("must log in when registering", () => {
    exportsTest.createUserWithEmailAndPassword.mockResolvedValueOnce();
    const pageRegister = register();
    const email = pageRegister.querySelector("#email");
    const password = pageRegister.querySelector("#password");
    const confirmPassword = pageRegister.querySelector("#confirm-password");
    email.value = "teste@teste.com";
    password.value = "123456";
    confirmPassword.value = "123456";
    pageRegister.dispatchEvent(new Event("submit"));
    expect(exportsTest.createUserWithEmailAndPassword.mock.calls[0][1]).toBe("teste@teste.com");
    expect(exportsTest.createUserWithEmailAndPassword.mock.calls[0][2]).toBe("123456");
    expect(exportsTest.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

// describe("signin", () => {
//   it("should log in", () => {
//     exportsTest.signInWithEmailAndPassword.mockResolvedValueOnce();
//     const pageSignin = signin();
//     const email = pageSignin.querySelector("#email");
//     const password = pageSignin.querySelector("#password");
//     email.value = "teste@teste.com";
//     password.value = "123456";
//     pageSignin.dispatchEvent(new Event("submit"));
//     expect(exportsTest.signInWithEmailAndPassword.mock.calls[0][1]).toEqual("teste@teste.com");
//     expect(exportsTest.signInWithEmailAndPassword.mock.calls[0][2]).toEqual("123456");
//     expect(exportsTest.signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
//   });
// });
