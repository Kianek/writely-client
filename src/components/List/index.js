import classNames from 'classnames';

import './list.scss';

function List({ className, children, thin }) {
  const classes = {
    thin,
  };
  return (
    <ul className={classNames('list', classes, className)} data-testid="list">
      {children}
    </ul>
  );
}

export default List;
