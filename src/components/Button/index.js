import './button.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Button({
  block,
  danger,
  disabled,
  flat,
  info,
  onClick,
  outline,
  raised,
  submit,
  success,
  children,
}) {
  const classes = classnames('btn', {
    block,
    danger,
    disabled,
    flat,
    info,
    outline,
    raised,
    success,
  });

  if (submit) {
    return (
      <input
        className={classes}
        type="submit"
        disabled={disabled}
        onClick={onClick}
        value={children}
      />
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  outline: PropTypes.bool,
  submit: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
