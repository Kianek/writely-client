import validator from 'validator';

export const minLength = (len) => (val) => {
  return (!!val && val.length >= len) || `must be at least ${len} character/s`;
};

export const isEmpty = (val) =>
  (!!val && val.length > 0) || 'must not be empty';

export const isEmail = (val) =>
  (!!val && validator.isEmail(val)) || 'must be a valid email';

export const isStrongPassword = (val) =>
  (!!val && validator.isStrongPassword(val, {})) || 'Weak password';

export const passwordsMatch = (val1) => (val2) => {
  return (!!val1 && !!val2 && val1 === val2) || 'passwords must match';
};
