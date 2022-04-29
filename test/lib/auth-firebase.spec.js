// /**
//  * @jest-environment jsdom
// */

// // import {
// //   // userCreate,
// //   // userLogin,
// //   // userLogout,
// //   // signinGoogle,
// // } from "../../src/lib/auth-firebase.js";
// import * as exportsTest from "../../src/lib/exports.js";
// import register from "../../src/js/pages/register.js";

// jest.mock("../../src/lib/exports.js");
// beforeEach(() => {
//   jest.clearAllMocks();
// });
// it("userCreate should create an user with email and password", async () => {
//   const email = "teste@teste.com";
//   const password = "123456";
//   const mockUser = {
//     user: {
//       email,
//     },
//   };
//   // const auth = undefined;
//   const pagCadastro = register();
//   console.log(pagCadastro);
//   // exportsTest.createUserWithEmailAndPassword.mockResolvedValue(mockUser);
//   expect(1 + 1).toEqual(2);

//   // const user = await userCreate(email, password);

//   expect(exportsTest.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
//   expect(exportsTest.createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
//   // expect(user).toEqual(mockUser.user);
// });

// // it("userCreate should fail creating user and return error code", async () => {
// //   exportsTest.createUserWithEmailAndPassword.mockRejectedValue({
// //     code: "auth/email-already-in-use",
// //   });
// //   try {
// //     await userCreate("teste@teste.com", "123456");
// //   } catch (error) {
// //     expect(exportsTest.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
// //     expect(error.code).toBe("auth/email-already-in-use");
// //   }
// // });

// // it("userLogin should singin an user with email and password", async () => {
// //   const email = "teste@teste.com";
// //   const password = "123456";
// //   const mockUser = {
// //     user: {
// //       email,
// //     },
// //   };
// //   const auth = undefined;
// //   exportsTest.signInWithEmailAndPassword.mockResolvedValue(mockUser);

// //   const user = await userLogin(email, password);

// //   expect(exportsTest.signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
// //   expect(exportsTest.signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
// //   expect(user).toEqual(mockUser.user);
// // });

// // it("userLogin should fail signin user and return error code", async () => {
// //   exportsTest.signInWithEmailAndPassword.mockRejectedValue({
// //     code: "auth/email-already-in-use",
// //   });
// //   try {
// //     await userLogin("teste@teste.com", "123456");
// //   } catch (error) {
// //     expect(exportsTest.signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
// //     expect(error.code).toBe("auth/email-already-in-use");
// //   }
// // });
// // it("userLogout should logout an user", async () => {
// //   exportsTest.signOut.mockResolvedValue({
// //     code: "Logout",
// //   });
// //   expect(exportsTest.signOut).toEqual("Logout");
// //   expect(exportsTest.signOut(auth)).toHaveBeenCalledTimes(1);
// // });

// // it("userLogout should fail logout user and return error code", async () => {
// //   exportsTest.signOut.mockRejectedValue({
// //     code: "auth/email-already-in-use",
// //   });
// //   try {
// //     await userLogout();
// //   } catch (error) {
// //     console.log(error);
// //     expect(exportsTest.signOut).toHaveBeenCalledTimes(1);
// //     expect(error.code).toBe("auth/email-already-in-use");
// //   }
// // });

// // describe("registerAndLoginGoogle", () => {
// //   it("", () => {
// //     expect(signinGoogle()).toEqual(exportsTest.signInWithPopup);
// //   });
// //   it("deveria parar de reclamar", () => exportsTest.signInWithPopup
// //     .then(() => {
// //       expect(exportsTest.signInWithPopup).toHaveBeenCalled();
// //       // expect(signInWithPopup.mock.calls).toHaveLength(3);
// //       // expect(signInWithPopup.mock.calls[0][0]).toEqual(getAuth());
// //       expect(exportsTest.signInWithPopup.mock.calls[0][1]).toEqual(exportsTest.provider());
// //     }));
// // });
