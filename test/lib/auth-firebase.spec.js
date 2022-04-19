import { userCreate } from "../../src/lib/auth-firebase.js";

jest.mock("../../src/lib/exports.js");

it("userCreate should create an user with email and password", () => {
  userCreate();
});
