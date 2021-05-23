import classNames from 'classnames';
import PropTypes from 'prop-types';
import './column.scss';

function Column({
  children,
  left,
  right,
  spaceAround,
  spaceBetween,
  spaceEvenly,
}) {
  const classes = classNames({
    left,
    right,
    spaceAround,
    spaceBetween,
    spaceEvenly,
  });

  return (
    <div id="column" className={classes}>
      {children}
    </div>
  );
}

Column.propTypes = {
  children: PropTypes.any,
  left: PropTypes.bool,
  right: PropTypes.bool,
  spaceAround: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  spaceEvenly: PropTypes.bool,
};

export default Column;
