export const capitalize = (value) => {
  if (!value || typeof value !== 'string') {
    return;
  }

  return value[0].toLocaleUpperCase() + value.slice(1);
};

export const invokeSequence = (
  funcArray,
  opts = { returnValues: false, filter: null, arg: null }
) => {
  if (!funcArray || funcArray.length === 0) {
    return;
  }

  if (opts.returnValues) {
    let values;
    if (!opts.arg) {
      values = funcArray.map((func) => func());
    } else {
      values = funcArray.map((func) => func(opts.arg));
    }

    if (!opts.filter) {
      return values;
    }

    return values.filter((value) => typeof value === opts.filter);
  }

  funcArray.forEach((func) => func());
};
