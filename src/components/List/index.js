import classNames from 'classnames';

import './list.scss';

function List({ borderless, className, children, fluid, height, thin }) {
  const classes = {
    borderless,
    fluid,
    thin,
  };
  return (
    <ul
      className={classNames('list', classes, className)}
      data-testid="list"
      style={{ height: height ? height : '400px' }}
    >
      {children}
    </ul>
  );
}

export default List;
