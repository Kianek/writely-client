import './button.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

function Button({
  block,
  className,
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
  const loadingOrDisabled = loading || disabled;
  const classes = classnames(
    'btn',
    {
      block,
      danger,
      disabled: loadingOrDisabled,
      flat,
      info,
      outline,
      raised,
      success,
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
