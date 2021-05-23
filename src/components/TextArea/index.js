import PropTypes from 'prop-types';
import './text-area.scss';

function TextArea({ placeholder, onChange, value }) {
  return (
    <textarea
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
