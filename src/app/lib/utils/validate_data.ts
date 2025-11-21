import {
  textInputs,
  userRegistration,
} from '@/app/lib/interfaces/registration';

export default function validator(inputs: userRegistration) {
  const errors: Partial<userRegistration> = {};

  // FIRST NAME
  if (!inputs[textInputs.firstname].trim()) {
    errors[textInputs.firstname] = 'error';
  }

  // LASTNAME
  if (!inputs[textInputs.lastname].trim()) {
    errors[textInputs.lastname] = 'error';
  }

  // EMAIL
  if (!inputs[textInputs.email].trim()) {
    errors[textInputs.email] = 'error';
  } else if (!/\S+@\S+\.\S+/.test(inputs[textInputs.email])) {
    errors[textInputs.email] = 'error';
  }

  // PASSWORD
  if (!inputs[textInputs.password].trim()) {
    errors[textInputs.password] = 'error';
  } else if (inputs[textInputs.password].trim().length < 6) {
    errors[textInputs.password] = 'error';
  }

  // CONFIRM PASSWORD
  if (!inputs[textInputs.passwordConfirm]) {
    errors[textInputs.passwordConfirm] = 'error';
  } else if (
    inputs[textInputs.passwordConfirm] !== inputs[textInputs.password]
  ) {
    errors[textInputs.passwordConfirm] = 'error';
  }

  return errors;
}
