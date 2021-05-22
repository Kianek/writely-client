import './spinner.scss';

function Spinner({ classes }) {
  return (
    <i
      id="spinner"
      data-testid="spinner"
      className={`${classes} fas fa-spinner`}
    ></i>
  );
}

export default Spinner;
