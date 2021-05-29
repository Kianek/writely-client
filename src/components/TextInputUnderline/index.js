import classNames from 'classnames';
import PropTypes from 'prop-types';
import './text-input-underline.scss';

function TextInputUnderline({ errors, hasFocus, valid, posY = 0 }) {
  return (
    <div
      data-testid="underline"
      className={classNames('underline', {
        active: hasFocus,
        inactive: hasFocus === false && hasFocus !== null,
        errors: errors && errors.length > 0,
        success: valid,
      })}
      style={{ transform: `translateY(${posY}px)` }}
    ></div>
  );
}

TextInputUnderline.propTypes = {
  errors: PropTypes.string,
  hasFocus: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(null)]),
  posY: PropTypes.number,
  valid: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(null)]),
};

export default TextInputUnderline;
