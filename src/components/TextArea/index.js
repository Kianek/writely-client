import classNames from 'classnames';
import PropTypes from 'prop-types';
import './text-area.scss';

function TextArea({ fluid, placeholder, onChange, value }) {
  return (
    <textarea
      className={classNames({ fluid })}
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
