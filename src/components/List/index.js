import './list.scss';

function List({ children }) {
  return (
    <ul className="list" data-testid="list">
      {children}
    </ul>
  );
}

export default List;
