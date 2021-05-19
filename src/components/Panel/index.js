import PropTypes from 'prop-types';
import classNames from 'classnames';
import './panel.scss';

function Panel({ wide, children }) {
  return (
    <div className={classNames('panel', { wide })} data-testid="panel">
      {children}
    </div>
  );
}

Panel.propTypes = {
  wide: PropTypes.bool,
  children: PropTypes.any,
};

export default Panel;
