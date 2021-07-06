import PropTypes from 'prop-types';
import './selector.scss';

function Selector({ onChange, options }) {
  return (
    <select id="selector" onChange={onChange}>
      {options &&
        options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
    </select>
  );
}

Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Selector;
