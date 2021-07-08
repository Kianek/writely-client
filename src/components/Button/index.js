import './button.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

function Button({
  block,
  className,
  circle,
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
  toggled,
  children,
}) {
  const loadingOrDisabled = loading || disabled;
  const classes = classnames(
    'btn',
    {
      block,
      circle,
      danger,
      disabled: loadingOrDisabled,
      flat,
      info,
      outline,
      raised,
      success,
      toggled,
    },
    className
  );

  const type = submit ? 'submit' : 'button';

  return (
    <button
      type={type}
      className={classes}
      disabled={loadingOrDisabled}
      onClick={onClick}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.any,
  circle: PropTypes.bool,
  className: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  info: PropTypes.bool,
  outline: PropTypes.bool,
  raised: PropTypes.bool,
  submit: PropTypes.bool,
  success: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
