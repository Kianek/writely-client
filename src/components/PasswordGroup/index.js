import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import { minLength, isStrongPassword, passwordsMatch } from '../../validators';

import './password-group.scss';
import Padding from '../Padding';
import Column from '../Column';

export function getPasswordObject() {
  return {
    text: '',
    handler: function (val) {
      this.text = val;
      return this.text;
    },
  };
}

function PasswordGroup({ errors, password, confirmPassword }) {
  return (
    <div className="password-group" data-testid="password-group">
      <Column>
        <p>
          Password must be at least 8 characters, and must contain at least 1
          number, 1 upper case letter, and 1 special character (e.g. !@#$%?)
        </p>
        <TextInput
          password
          errorHandler={errors.handler}
          placeholder="Password"
          onChange={password.handler}
          validators={[minLength(8), isStrongPassword]}
          value={password.text}
        />
        <Padding amount="0.25em" />
        <TextInput
          password
          errorHandler={errors.handler}
          placeholder="Confirm Password"
          onChange={confirmPassword.handler}
          validators={[passwordsMatch(password.text)]}
          value={confirmPassword.text}
        />
      </Column>
    </div>
  );
}

PasswordGroup.propTypes = {
  errors: PropTypes.shape({
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
    handler: PropTypes.func.isRequired,
  }),
  password: PropTypes.shape({
    text: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
  }),
  confirmPassword: PropTypes.shape({
    text: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
  }),
};

export default PasswordGroup;
