import classNames from 'classnames';

import './list.scss';

function List({ className, children, height }) {
  return (
    <ul
      className={classNames('list', className)}
      data-testid="list"
      style={{ height: height ? height : '400px' }}
    >
      {children}
    </ul>
  );
}

export default List;
