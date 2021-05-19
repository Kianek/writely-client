import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import './text-input.scss';

function TextInput({ onChange, placeholder, validators, value }) {
  const [errors, setErrors] = useState('');

  const setState = (event) => {
    onChange(event.target.value);
    validate();
  };

  const validate = () => {
    if (!validators) {
      return;
    }

    let errs = [];
    validators.forEach((validator) => {
      let result = validator(value);
      if (typeof result === 'string') {
        console.log(typeof result);
        errs.push(result);
      }
    });

    setErrors(errs.join(', '));
  };

  return (
    <Fragment>
      <input
        type="text"
        onChange={setState}
        placeholder={placeholder}
        value={value}
      />
      {errors.length > 0 && <p data-testid="errors">{errors}</p>}
    </Fragment>
  );
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  validators: PropTypes.arrayOf(PropTypes.func),
  value: PropTypes.string.isRequired,
};

export default TextInput;
