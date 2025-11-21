export enum textInputs {
  firstname,
  lastname,
  email,
  password,
  passwordConfirm,
}
export interface userRegistration {
  [textInputs.firstname]: string;
  [textInputs.lastname]: string;
  [textInputs.email]: string;
  [textInputs.password]: string;
  [textInputs.passwordConfirm]: string;
}
