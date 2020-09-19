import validator from 'validator';

export const minLength = (min) => (val) =>
  (!!val && val.length >= min) || `Must be at least ${min}`;

export const isValid = (val) =>
  (!!val && !validator.isEmpty(val)) || `Must not be empty`;

export const isEmail = (val) =>
  (!!val && validator.isEmail(val)) || `Must be a valid email`;

export const containsSpecialChars = (val) =>
  (!!val && validator.contains(val, '?!@#$%^&*|')) ||
  `Must contain at least 1 non-letter and non-numeric character`;

export const validationExecutor = (value, validationFunctions) => {
  return validationFunctions.map((func) => func(value)).join('\n');
};
