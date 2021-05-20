import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { capitalize } from '../../utils/utils';
import debounce from 'lodash/debounce';
import './text-input.scss';

function TextInput({ onChange, placeholder, password, validators, value }) {
  const [errors, setErrors] = useState('');
  const [hasFocus, setHasFocus] = useState(false);

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
        console.log(typeof result);
        errs.push(result);
      }
    });

    setErrors(capitalize(errs.join(', ')));
  };

  const validate = debounce(validateInput, 750);

  const setState = (event) => {
    onChange(event.target.value);
    validate();
  };

  return (
    <div className="text-input">
      <div className="input-group">
        <input
          type={password ? 'password' : 'text'}
          onChange={setState}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          value={value}
        />
        <div
          className={classNames('bottom-border', {
            active: hasFocus,
            inactive: !hasFocus,
            errors: errors && errors.length > 0,
          })}
        ></div>
      </div>
      {errors && errors.length > 0 && (
        <p className="errors" data-testid="errors">
          {errors}
        </p>
      )}
    </div>
  );
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  password: PropTypes.bool,
  validators: PropTypes.arrayOf(PropTypes.func),
  value: PropTypes.string.isRequired,
};

export default TextInput;
