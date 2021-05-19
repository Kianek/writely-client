import './panel.scss';

function Panel({ children }) {
  return (
    <div className="panel" data-testid="panel">
      {children}
    </div>
  );
}

export default Panel;
