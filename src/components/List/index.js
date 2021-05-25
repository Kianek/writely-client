import classNames from 'classnames';

import './list.scss';

function List({ borderless, className, children, fluid, thin }) {
  const classes = {
    borderless,
    fluid,
    thin,
  };
  return (
    <ul className={classNames('list', classes, className)} data-testid="list">
      {children}
    </ul>
  );
}

export default List;
