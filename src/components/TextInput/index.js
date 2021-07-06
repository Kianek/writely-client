import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { capitalize, invokeSequence } from '../../utils';
import debounce from 'lodash/debounce';
import './text-input.scss';
import TextInputUnderline from '../TextInputUnderline';

function TextInput({
  fluid,
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

    let errs = invokeSequence(validators, {
      returnValues: true,
      filter: 'string',
      arg: value,
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

  const validate = debounce(validateInput, 500);

  return (
    <div className={classNames('input-group', { fluid })}>
      <input
        type={password ? 'password' : 'text'}
        onChange={onChange}
        onKeyUp={validate}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        value={value}
      />
      <TextInputUnderline errors={errors} hasFocus={hasFocus} valid={valid} />
      {errors && errors.length > 0 && <p className="errors">{errors}</p>}
    </div>
  );
}

TextInput.propTypes = {
  errorHandler: PropTypes.func,
  fluid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  password: PropTypes.bool,
  validators: PropTypes.arrayOf(PropTypes.func),
  value: PropTypes.string.isRequired,
};

export default TextInput;
