import './button.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

function Button({
  block,
  danger,
  disabled,
  flat,
  info,
  loading,
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

  const loadingOrDisabled = loading || disabled;
  const type = submit ? 'submit' : 'button';

  return (
    <button
      type={type}
      className={classes}
      disabled={loadingOrDisabled}
      onClick={onClick}
    >
      {loadingOrDisabled ? <Spinner /> : children}
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
