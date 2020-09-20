import validator from 'validator';

export const isEmpty = validator.isEmpty;

export const minLength = (min) => (val) =>
  (!!val && val.length >= min) || `must contain at least ${min} characters`;

export const isValid = (val) =>
  (!!val && val.length > 0) || `must not be empty`;

export const isEmail = (val) =>
  (!!val && validator.isEmail(val)) || `must be a valid email`;

export const containsSpecialChars = (val) =>
  (!!val && validator.matches(val, /[?!@#$%^&*|]/i)) ||
  `must contain at least 1 non-letter and non-numeric character`;

export const validationExecutor = (value, validationFunctions) => {
  let errors = [];
  validationFunctions.forEach((func) => {
    const result = func(value);

    if (typeof result === 'string') {
      errors.push(result);
    }
  });
  return errors.join(', ');
};
