export const capitalize = (value) => {
  if (!value || typeof value !== 'string') {
    return;
  }

  return value[0].toLocaleUpperCase() + value.slice(1);
};
