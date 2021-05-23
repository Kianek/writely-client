import classNames from 'classnames';

import './list.scss';

function List({ className, children }) {
  return (
    <ul className={classNames('list', className)} data-testid="list">
      {children}
    </ul>
  );
}

export default List;
