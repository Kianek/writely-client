import PropTypes from 'prop-types';
import './text-input.scss';

function TextInput({ onChange, placeholder, value }) {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
