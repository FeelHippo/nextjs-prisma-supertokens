'use client';

import React, { useState } from 'react';
import {
  textInputs,
  userRegistration,
} from '@/app/lib/interfaces/registration';

const useForm = (
  validate: (inputs: userRegistration) => Partial<userRegistration>,
) => {
  const [inputs, setInputs] = useState<userRegistration>({
    [textInputs.firstname]: '',
    [textInputs.lastname]: '',
    [textInputs.email]: '',
    [textInputs.password]: '',
    [textInputs.passwordConfirm]: '',
  });

  const [errors, setErrors] = useState<Partial<userRegistration>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.FocusEvent<HTMLInputElement, Element>,
  ) => {
    e.preventDefault();

    setErrors(validate(inputs));
  };

  return { handleChange, inputs, handleSubmit, errors };
};

export default useForm;
