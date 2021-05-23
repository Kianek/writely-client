import PropTypes from 'prop-types';
import classNames from 'classnames';
import './row.scss';

function Row({
  children,
  className,
  left,
  right,
  spaceAround,
  spaceBetween,
  spaceEvenly,
}) {
  const classes = classNames(
    {
      left,
      right,
      spaceAround,
      spaceBetween,
      spaceEvenly,
    },
    className
  );

  return (
    <div id="row" className={classes}>
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  spaceAround: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  spaceEvenly: PropTypes.bool,
};

export default Row;
