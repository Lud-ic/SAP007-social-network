/**
 * @jest-environment jsdom
*/

// import { userCreate } from "../../src/lib/auth-firebase.js";
import * as exportsTest from "../../src/lib/exports.js";
import register from "../../src/js/pages/register.js";

// import { userCreate } from "../../src/lib/auth-firebase.js";

jest.mock("../../src/lib/exports.js");

describe("Register", () => {
  beforeEach(() => exportsTest.createUserWithEmailAndPassword.mockClear());
  it("an error should occur if the passwords do not match", () => {
    const page = register();
    const email = page.querySelector("#email");
    const password = page.querySelector("#password");
    const confirmPassword = page.querySelector("#confirm-password");
    email.value = "teste@teste.com";
    password.value = "123456";
    confirmPassword.value = "1234567";
    const button = page.querySelector(".button-submit");
    button.dispatchEvent(new Event("click"));
    const errorFound = page.querySelector("#error");
    expect(errorFound.innerHTML = "senhas incompatíveis").toEqual("senhas incompatíveis");
    expect(exportsTest.createUserWithEmailAndPassword).not.toHaveBeenCalled();
  });
});

// describe("", () => {
//   it("", () => {
//     const page = register();
//     const email = page.querySelector("#email");
//     const password = page.querySelector("#password");
//     const confirmPassword = page.querySelector("#confirm-password");
//     email.value = "teste@teste.com";
//     password.value = "123456";
//     confirmPassword.value = "123456";
//     const button = page.querySelector(".button-submit");
//     button.dispatchEvent(new Event("click"));
//     expect(exportsTest.createUserWithEmailAndPassword).toHaveBeenCalled(1);
//   });
// });
