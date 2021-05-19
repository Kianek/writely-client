import PropTypes from 'prop-types';
import './text-input.scss';

function TextInput({ onChange, placeholder, value }) {
  const setState = (event) => {
    onChange(event.target.value);
  };
  return (
    <input
      type="text"
      onChange={setState}
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
