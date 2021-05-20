import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { capitalize } from '../../utils';
import debounce from 'lodash/debounce';
import './text-input.scss';

function TextInput({
  errorHandler,
  onChange,
  placeholder,
  password,
  validators,
  value,
}) {
  const [errors, setErrors] = useState('');
  const [hasFocus, setHasFocus] = useState(null);
  const [valid, setValid] = useState(null);

  const setFocus = (boolValue) => {
    setHasFocus(boolValue);
  };

  const validateInput = () => {
    if (!validators) {
      return;
    }

    let errs = [];
    validators.forEach((validator) => {
      let result = validator(value);
      if (typeof result === 'string') {
        errs.push(result);
      }
    });

    if (errorHandler) {
      errorHandler(errs);
    }

    if (errs.length === 0) {
      setValid(true);
      setErrors('');
    } else {
      setValid(false);
      setErrors(capitalize(errs.join(', ')));
    }
  };

  const validate = debounce(validateInput, 750);

  const setState = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="text-input">
      <div className="input-group">
        <input
          type={password ? 'password' : 'text'}
          onChange={setState}
          onKeyUp={validate}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          value={value}
        />
        <div
          data-testid="err"
          className={classNames('bottom-border', {
            active: hasFocus,
            inactive: hasFocus === false && hasFocus !== null,
            errors: errors && errors.length > 0,
            success: valid,
          })}
        ></div>
      </div>
      {errors && errors.length > 0 && <p className="errors">{errors}</p>}
    </div>
  );
}

TextInput.propTypes = {
  errorHandler: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  password: PropTypes.bool,
  validators: PropTypes.arrayOf(PropTypes.func),
  value: PropTypes.string.isRequired,
};

export default TextInput;
