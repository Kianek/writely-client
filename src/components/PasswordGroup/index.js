import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import {} from '../../validators';

import './password-group.scss';

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
      <p>
        Password must be at least 8 characters, and must contain at least 1
        number, 1 upper case letter, and 1 special character (e.g. !@#$%?)
      </p>
      <TextInput
        password
        placeholder="Password"
        onChange={password.handler}
        value={password.text}
      />
      <TextInput
        password
        placeholder="Confirm Password"
        onChange={confirmPassword.handler}
        value={confirmPassword.text}
      />
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
