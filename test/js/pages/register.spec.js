/**
 * @jest-environment jsdom
*/

import register from "../../../src/js/pages/register.js";

jest.mock("../../../src/lib/auth-firebase.js");

it("should return an error", () => {
  const registerPage = register();
  const emailInput = registerPage.container.querySelector("#email");
  const password = registerPage.container.querySelector("#password");
  const confirmPassword = registerPage.container.querySelector("#confirm-password");
  emailInput.value = "teste@teste.com";
  password.value = "123456";
  confirmPassword.value = "1234567";
  const button = registerPage.container.querySelector("#button-submit");
  button.dispatchEvent(new Event("click"));
  const errorMessage = registerPage.container.querySelector("#error");
  expect(errorMessage.textContent).toBe("senhas incompatíveis");
});
