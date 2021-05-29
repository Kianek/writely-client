import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TextInputUnderline from '../TextInputUnderline';
import './text-area.scss';

function TextArea({ fluid, placeholder, onChange, value }) {
  const [hasFocus, setHasFocus] = useState(null);

  return (
    <div id="text-area">
      <textarea
        className={classNames({ fluid })}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        value={value}
      ></textarea>
      <TextInputUnderline hasFocus={hasFocus} posY={-5} />
    </div>
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
